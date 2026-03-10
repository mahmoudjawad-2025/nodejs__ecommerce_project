import { Router } from 'express';
import { getUser_findOne, getAll_find, getAll_findByConfirmEmail, getUser_findById } from './user_controller.js';
import { deleteUser, deleteUser_findByIdAndDelete, deleteUser_findOneAndDelete } from './user_controller.js';
import { updateUser, updateUser_updateMany, updateUser_findByIdAndUpdate, updateUser_findOneAndUpdate } from './user_controller.js';
import validation from '../../middlewares/validation_mw.js';
import asyncHandler from '../../utils/async_handler.js';
import * as schemas from './user_validation.js';

const router = Router();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  View

router.get('/getUser_findOne/:id', validation(schemas.getUserByIdSchema), asyncHandler(getUser_findOne));
router.get('/getAll_find', asyncHandler(getAll_find));
router.get('/getAll_findByConfirmEmail', asyncHandler(getAll_findByConfirmEmail));
router.get('/getUser_findById/:id', validation(schemas.getUserByIdSchema), asyncHandler(getUser_findById));

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Delete

router.delete('/deleteUser/:id', validation(schemas.deleteUserSchema), asyncHandler(deleteUser));
router.delete('/deleteUser_findByIdAndDelete/:id', validation(schemas.deleteUserSchema), asyncHandler(deleteUser_findByIdAndDelete));
router.delete('/deleteUser_findOneAndDelete/:id', validation(schemas.deleteUserSchema), asyncHandler(deleteUser_findOneAndDelete));

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Update

router.patch('/updateUser/:id', validation(schemas.updateUserSchema), asyncHandler(updateUser));
router.patch('/updateUser_updateMany', asyncHandler(updateUser_updateMany));
router.patch('/updateUser_findByIdAndUpdate/:id', validation(schemas.updateUserSchema), asyncHandler(updateUser_findByIdAndUpdate));
router.patch('/updateUser_findOneAndUpdate/:id', validation(schemas.updateUserSchema), asyncHandler(updateUser_findOneAndUpdate));

export default router;
