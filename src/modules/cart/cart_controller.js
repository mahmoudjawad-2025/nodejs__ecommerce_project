import CartModel from "../../../db/models/cart_model.js"
import GlobalError from "../../utils/global_error.js";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  addToCart

export const addToCart = async (req, res, next) => {
    const { productId } = req.body;
    const cart = await CartModel.findOne({ userId: req.id });

    if (!cart) {
        const newCart = await CartModel.create({
            userId: req.id,
            products: [{ productId }]
        });
        return res.status(201).json({ message: "success", cart: newCart });
    }

    for (let i = 0; i < cart.products.length; i++) {
        if (cart.products[i].productId == productId) {
            return next(new GlobalError("product already exists", 409));
        }
    }

    cart.products.push({ productId });
    await cart.save();

    return res.status(201).json({ message: "success" });
}
