import joi from 'joi';

const idSchema = joi.string().hex().length(24).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  createOrder

export const createOrderSchema = joi.object({
    couponName: joi.string().min(3).max(50),
    address: joi.string().min(5).max(200),
    phoneNumber: joi.string().regex(/^01[0125][0-9]{8}$/)
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getByStatus

export const getByStatusSchema = joi.object({
    status: joi.string().valid('pending', 'delivered', 'cancelled', 'on-way').required()
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  changeStatus

export const changeStatusSchema = joi.object({
    orderId: idSchema,
    status: joi.string().valid('pending', 'delivered', 'cancelled', 'on-way').required()
}).required();
