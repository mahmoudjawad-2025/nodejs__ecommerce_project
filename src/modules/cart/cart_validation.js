import joi from 'joi';

const idSchema = joi.string().hex().length(24).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Add To Cart Schema

export const addToCartSchema = joi.object({
    productId: idSchema
}).required();
