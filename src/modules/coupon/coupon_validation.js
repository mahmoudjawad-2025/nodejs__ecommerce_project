import joi from 'joi';

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Create Coupon Schema

export const createCouponSchema = joi.object({
    name: joi.string().min(3).max(50).required(),
    amount: joi.number().min(1).max(100).required(),
    expireDate: joi.date().greater('now').required(),
}).required();
