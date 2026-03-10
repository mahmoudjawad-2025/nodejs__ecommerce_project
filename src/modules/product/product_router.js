import { Router } from 'express';
import * as controller from './product_controller.js';
import { auth } from '../../middlewares/auth_mw.js';
import asyncHandler from '../../utils/async_handler.js';
import { fileUpload, fileValidation } from '../../utils/upload_service.js';
import reviewRouter from '../review/review_router.js';
import validation from '../../middlewares/validation_mw.js';
import * as schema from './product_validation.js';

const router = Router();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  special : Review Router

router.use('/:productId/review', reviewRouter);

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Endpoints

router.post('/create', auth(['Admin']), fileUpload(fileValidation.image).fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'subImages', maxCount: 4 }
]), validation(schema.createProductSchema), asyncHandler(controller.create));

router.get('/getAll', auth(['Admin', 'User']), asyncHandler(controller.getAll));
router.get('/getActive', asyncHandler(controller.getActive));
router.get('/getDetails/:id', validation(schema.productIdSchema), asyncHandler(controller.getDetails));

router.delete('/remove/:id', auth(['Admin']), validation(schema.productIdSchema), asyncHandler(controller.remove));


export default router;