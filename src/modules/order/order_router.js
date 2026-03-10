import { Router } from 'express';
import * as controller from './order_controller.js';
import { auth } from '../../middlewares/auth_mw.js';
import asyncHandler from '../../utils/async_handler.js';
import validation from '../../middlewares/validation_mw.js';
import * as schema from './order_validation.js';

const router = Router();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Endpoints

router.post('/create', auth(['User', 'Admin']), validation(schema.createOrderSchema), asyncHandler(controller.create));
router.get('/', auth(['User', 'Admin']), asyncHandler(controller.getUserOrders));
router.get('/:status', auth(['User', 'Admin']), validation(schema.getByStatusSchema), asyncHandler(controller.getOrdersByStatus));
router.patch('/changeStatus/:orderId', auth(['Admin']), validation(schema.changeStatusSchema), asyncHandler(controller.changeStatus))

export default router;
