import OrderModel from "../../../db/models/order_model.js";
import ReviewModel from "../../../db/models/review_model.js";
import GlobalError from "../../utils/global_error.js";


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  create

export const create = async (req, res, next) => {
    const userId = req.id;
    const { productId } = req.params;
    const { comment, rating } = req.body;

    const order = await OrderModel.findOne({
        userId: userId,
        status: 'delivered',
        "products.productId": productId
    });

    if (!order) {
        return next(new GlobalError("can't review this product", 400));
    }

    const review = await ReviewModel.create({
        comment,
        rating,
        productId: productId,
        createdBy: userId
    });

    if (!review) {
        return next(new GlobalError("error while adding review", 400));
    }

    return res.status(201).json({ message: "success" });
}
