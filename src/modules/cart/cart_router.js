import { Router } from 'express';
import * as controller from './cart_controller.js';
import { auth } from '../../middlewares/auth_mw.js';
import asyncHandler from '../../utils/async_handler.js';
import validation from '../../middlewares/validation_mw.js';
import * as schema from './cart_validation.js';

const router = Router();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Post

router.post('/addToCart', auth(['User', 'Admin']), validation(schema.addToCartSchema), asyncHandler(controller.addToCart));

export default router;