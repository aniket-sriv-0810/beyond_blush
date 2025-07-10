import express from 'express';

const router = express.Router();

// core router : /api/user

//Register a new User
router
     .route('/register')
     .post()

// Display Data of a User
router
     .route('/:id')
     .get()

//Edit Details of User
router
     .route('/:id/edit')
     .put()

//Change Password of User
router
     .route('/change-password')
     .put()

export default router;