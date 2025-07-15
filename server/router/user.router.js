import express from 'express';
import { changePassword, checkAuthentication, getUserById, loginUser, registerUser, updateUser } from '../controller/adminOne.controller.js';
import { validate } from '../middleware/validator.js';
import { registerSchema } from '../test/User/user.validator.js';
import { loginSchema } from '../test/User/userLogin.validator.js';
import { updateProfileSchema } from '../test/User/userEdit.validator.js';
import { changePasswordSchema } from '../test/User/changePassword.validator.js';
import {verifyJWT} from '../middleware/isLoggedIn.js';

const router = express.Router();

// core router : /api/user

//Register a new User
router
     .route('/register')
     .post( validate(registerSchema) ,registerUser)

router
     .route('/login')
     .post( validate(loginSchema) ,loginUser)

router
     .route('/auth')
     .get( verifyJWT ,checkAuthentication)

// Display Data of a User
router
     .route('/:id')
     .get(getUserById )

//Edit Details of User
router
     .route('/:id/edit')
     .put(validate(updateProfileSchema) , updateUser )

//Change Password of User
router
     .route('/:id/change-password')
     .put(validate(changePasswordSchema) , changePassword)

export default router;