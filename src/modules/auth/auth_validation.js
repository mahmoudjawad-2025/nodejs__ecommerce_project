import joi from 'joi';

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  register

export const registerSchema = joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    age: joi.number().integer().min(10).max(100)
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  login

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  registerMany

export const registerManySchema = joi.array().items(registerSchema).min(1).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  confirmEmail

export const confirmEmailSchema = joi.object({
    token: joi.string().required()
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  sendCode

export const sendCodeSchema = joi.object({
    email: joi.string().email().required()
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  resetPassword

export const resetPasswordSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    code: joi.string().length(4).required()
}).required();
