import express from 'express' ;
import {validate} from '../middleware/validator.js'
import { contactSchemaValidation } from '../test/Contact/contact.validator.js';
import { createContact, createReview, getAllFaqs, getAllReviews, getAllTerms } from '../controller/nav.controller.js';
import { reviewSchemaValidation } from '../test/Review/review.validator.js';
import { getAllPricing, getAllSliders } from '../controller/adminTwo.controller.js';
import { getAllServices, getCardById } from '../controller/adminThree.controller.js';
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

//Display all Img Sliders
router
     .route('/all-slides')
     .get(getAllSliders)

//Display all Services
router
     .route('/all-services')
     .get(getAllServices)

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
     .route('/all-prices')
     .get(getAllPricing)


//Display cards individually
router
     .route('/card/:id')
     .get(getCardById)


export default router;
