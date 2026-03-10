import { Router } from 'express';
import * as controller from './auth_controller.js';
import validation from '../../middlewares/validation_mw.js';
import asyncHandler from '../../utils/async_handler.js';
import * as schemas from './auth_validation.js';

const router = Router();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Registration

router.post('/register', validation(schemas.registerSchema), asyncHandler(controller.register));
router.get('/confirmEmail/:token', validation(schemas.confirmEmailSchema), asyncHandler(controller.confirmEmail));
router.post('/resetPassword', validation(schemas.resetPasswordSchema), asyncHandler(controller.resetPassword));
router.post('/sendCode', validation(schemas.sendCodeSchema), asyncHandler(controller.sendCode));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Login

router.post('/login', validation(schemas.loginSchema), asyncHandler(controller.login));

export default router;