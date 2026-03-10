import { connectionDB } from '../db/connection.js';
import userRouter from './modules/user/user_router.js';
import authRouter from './modules/auth/auth_router.js';
import categoryRouter from './modules/category/category_router.js';
import cors from 'cors';
import GlobalError from './utils/global_error.js';
import productRouter from './modules/product/product_router.js';
import couponRouter from './modules/coupon/coupon_router.js';
import cartRouter from './modules/cart/cart_router.js';
import orderRouter from './modules/order/order_router.js';

const initApp = (app, express) => {

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Database
    connectionDB();

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Middlewares
    app.use(express.json());
    app.use(cors());

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Routes
    app.use('/user', userRouter);
    app.use('/auth', authRouter);
    app.use('/category', categoryRouter);
    app.use('/product', productRouter);
    app.use('/coupon', couponRouter);
    app.use('/cart', cartRouter);
    app.use('/order', orderRouter);
    // app.use('/review', reviewRouter); => from product_router.js

    app.get('/', (req, res) => {
        return res.status(200).json({ message: "Welcom !" });
    });

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Error Handling
    app.all('*path', (req, res, next) => {
        return next(new GlobalError(`Page Not Found: ${req.originalUrl}`, 404));
    });

    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        return res.status(statusCode).json({
            message: err.message,
            statusCode,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack, error: err })
        });
    });
}

export default initApp;