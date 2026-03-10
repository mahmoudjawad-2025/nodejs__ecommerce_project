import { Router } from 'express';
import * as controller from './category_controller.js';
import { auth } from '../../middlewares/auth_mw.js';
import asyncHandler from '../../utils/async_handler.js';
import validation from '../../middlewares/validation_mw.js';
import * as schema from './category_validation.js';

const router = Router();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Endpoints

router.post('/create', auth(['Admin']), validation(schema.createCategorySchema), asyncHandler(controller.create));
router.get('/getAll', asyncHandler(controller.getAll));
router.get('/getActive', auth(['User', 'Admin']), asyncHandler(controller.getActive));
router.get('/getDetails/:id', validation(schema.categoryIdSchema), asyncHandler(controller.getDetails));
router.delete('/remove/:id', auth(['Admin']), validation(schema.categoryIdSchema), asyncHandler(controller.remove));
router.put('/update/:id', auth(['Admin']), validation(schema.updateCategorySchema), asyncHandler(controller.update));

export default router;