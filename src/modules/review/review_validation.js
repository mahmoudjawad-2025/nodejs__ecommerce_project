import joi from 'joi';

const idSchema = joi.string().hex().length(24).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  createReview

export const createReviewSchema = joi.object({
    productId: idSchema,
    comment: joi.string().min(3).max(500).required(),
    rating: joi.number().min(1).max(5).required()
}).required();
