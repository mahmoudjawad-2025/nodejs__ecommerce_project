import joi from 'joi';

const idSchema = joi.string().hex().length(24).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  createCategory

export const createCategorySchema = joi.object({
    name: joi.string().min(3).max(30).required(),
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  updateCategory

export const updateCategorySchema = joi.object({
    id: idSchema,
    name: joi.string().min(3).max(30),
    status: joi.string().valid('active', 'not_active')
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  categoryId

export const categoryIdSchema = joi.object({
    id: idSchema
}).required();
