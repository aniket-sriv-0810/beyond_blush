import express from 'express' ;
import {validate} from '../middleware/validator.js'
import { contactSchemaValidation } from '../test/Contact/contact.validator.js';
import { createContact, createReview, getAllFaqs, getAllReviews, getAllTerms } from '../controller/nav.controller.js';
import { reviewSchemaValidation } from '../test/Review/review.validator.js';
const router = express.Router();

// Core Route : /api/navigate

// Send Contact Details
router
     .route('/contact')
     .post(validate(contactSchemaValidation) , createContact)

// Send Reviews
router
     .route('/add-review')
     .post(validate(reviewSchemaValidation) , createReview)

//Display all Reviews
router
     .route('/all-reviews')
     .get(getAllReviews)

//Display all Services
router
     .route('all-services')
     .get(validate(contactSchemaValidation) , createContact)

//Display all FAQs
router
     .route('/faqs')
     .get(getAllFaqs)

//Display all Terms & Conditions
router
     .route('/terms-and-cond')
     .get(getAllTerms)

//Display all prices
router
     .route('all-prices')
     .get(validate(contactSchemaValidation) , createContact)


export default router;
