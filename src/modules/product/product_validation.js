import joi from 'joi';

const idSchema = joi.string().hex().length(24).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  createProduct

export const createProductSchema = joi.object({
    name: joi.string().min(3).max(100).required(),
    price: joi.number().positive().required(),
    discount: joi.number().min(0).max(100),
    stock: joi.number().integer().min(0),
    categoryId: idSchema,
    description: joi.string().min(10).max(1000),
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  productId

export const productIdSchema = joi.object({
    id: idSchema
}).required();
