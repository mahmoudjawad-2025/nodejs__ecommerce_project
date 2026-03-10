import { Router } from 'express';
import * as controller from './review_controller.js';
import { auth } from '../../middlewares/auth_mw.js';
import asyncHandler from '../../utils/async_handler.js';
import validation from '../../middlewares/validation_mw.js';
import * as schema from './review_validation.js';

const router = Router({ mergeParams: true });

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Endpoints

router.post('/create', auth(['Admin', 'User']), validation(schema.createReviewSchema), asyncHandler(controller.create));


export default router;