import { Router } from 'express';
import * as controller from './coupon_controller.js';
import { auth } from '../../middlewares/auth_mw.js';
import asyncHandler from '../../utils/async_handler.js';
import { fileUpload, fileValidation } from '../../utils/upload_service.js';
import validation from '../../middlewares/validation_mw.js';
import * as schema from './coupon_validation.js';

const router = Router();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Endpoints

router.post('/create', auth(['Admin']), validation(schema.createCouponSchema), asyncHandler(controller.create));

router.get('/getAll', auth(['Admin']), asyncHandler(controller.getAll));

export default router;