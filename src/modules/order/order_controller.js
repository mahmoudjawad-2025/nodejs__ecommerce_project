import ProductModel from "../../../db/models/product_model.js"
import CartModel from "../../../db/models/cart_model.js";
import CouponModel from "../../../db/models/coupon_model.js";
import UserModel from "../../../db/models/user_model.js";
import OrderModel from "../../../db/models/order_model.js";
import GlobalError from "../../utils/global_error.js";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  create

export const create = async (req, res, next) => {
    const { couponName } = req.body;

    // Find user's cart
    const cart = await CartModel.findOne({ userId: req.id });

    if (!cart) {
        return next(new GlobalError("cart not found", 404));
    }

    // Validate coupon if provided
    let coupon;
    if (couponName) {
        coupon = await CouponModel.findOne({ name: couponName });

        if (!coupon) {
            return next(new GlobalError("coupon not found", 404));
        }

        if (coupon.expireDate <= new Date()) {
            return next(new GlobalError("this coupon has expired", 400));
        }

        if (coupon.usedBy.includes(req.id)) {
            return next(new GlobalError("coupon already used", 400));
        }
        req.body.coupon = coupon;
    }

    // Process cart products
    const finalProducts = [];
    let subTotal = 0;

    for (let product of cart.products) {
        const checkProduct = await ProductModel.findOne({
            _id: product.productId,
            stock: { $gte: product.quantity }
        });

        if (!checkProduct) {
            return next(new GlobalError("product quantity not available", 400));
        }

        // Convert to object and add product details
        product = product.toObject();
        product.productName = checkProduct.name;
        product.unitPrice = checkProduct.priceAfterDiscount;
        product.finalPrice = product.quantity * checkProduct.priceAfterDiscount;
        subTotal += product.finalPrice;
        finalProducts.push(product);
    }

    // Get user details for address and phone
    const user = await UserModel.findById(req.id);

    if (!req.body.address) {
        req.body.address = user.address;
    }

    if (!req.body.phoneNumber) {
        req.body.phoneNumber = user.phoneNumber;
    }

    // Create order
    const order = await OrderModel.create({
        userId: req.id,
        products: finalProducts,
        finalPrice: subTotal - (subTotal * (req.body.coupon?.amount || 0) / 100),
        couponName: couponName ?? '',
        address: req.body.address,
        phoneNumber: req.body.phoneNumber
    });

    //decrase product stock
    for (const product of cart.products) {
        await ProductModel.updateOne({ _id: product.productId },
            {
                $inc: {
                    stock: -product.quantity
                }
            });
    }

    // update coupon used by
    if (req.body.coupon) {
        await CouponModel.updateOne({ _id: req.body.coupon._id },
            {
                $addToSet: {
                    usedBy: req.id
                }
            })
    }

    // delete user cart
    await CartModel.deleteOne({ userId: req.id },
        { products: [] }
    );

    return res.status(201).json({ message: "success", order });
};

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getUserOrders

export const getUserOrders = async (req, res, next) => {
    const orders = await OrderModel.find({ userId: req.id }).populate("products.productId");

    return res.status(200).json({ message: "success", orders });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getOrdersByStatus

export const getOrdersByStatus = async (req, res, next) => {
    const { status } = req.params;
    const orders = await OrderModel.find({ status: status }).populate("products.productId");

    return res.status(200).json({ message: "success", orders });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  changeStatus

export const changeStatus = async (req, res, next) => {
    const { orderId } = req.params;

    const order = await OrderModel.findById(orderId);

    if (!order) {
        return next(new GlobalError("order not found", 404));
    }

    order.status = req.body.status;
    order.updatedBy = req.id;
    await order.save();

    if (req.body.status == 'cancelled') {
        for (const product of order.products) {
            await ProductModel.updateOne({ _id: product.productId },
                {
                    $inc: {
                        stock: product.quantity
                    }
                });
        }

        if (req.body.coupon) {
            await CouponModel.updateOne({ _id: req.body.coupon._id },
                {
                    $pull: {
                        usedBy: req.id
                    }
                })
        }
    }

    return res.status(200).json({ message: "success" });
}
