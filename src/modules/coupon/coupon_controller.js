import couponModel from "../../../db/models/coupon_model.js"
import GlobalError from "../../utils/global_error.js";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  create

export const create = async (req, res, next) => {
    if (await couponModel.findOne({ name: req.body.name })) {
        return next(new GlobalError("coupon name already exists", 409));
    }

    req.body.expireDate = new Date(req.body.expireDate);
    req.body.createdBy = req.id;
    req.body.updatedBy = req.id;

    const coupon = await couponModel.create(req.body);

    return res.status(201).json({ message: "success", coupon });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getAll

export const getAll = async (req, res, next) => {
    const coupons = await couponModel.find();
    return res.status(200).json({ message: "success", coupons });
}
