import express from 'express' ;

const router = express.Router();

// Core Route : /api/navigate

// Send Contact Details
router
     .route('/contact')
     .post()

// Send Reviews
router
     .route('/add-review')
     .post()

//Display all Reviews
router
     .route('/all-reviews')
     .get()

//Display all Services
router
     .route('all-services')
     .get()

//Display all FAQs
router
     .route('/faqs')
     .get()

//Display all Terms & Conditions
router
     .route('/terms-and-cond')
     .get()

//Display all prices
router
     .route('all-prices')
     .get()


export default router;
