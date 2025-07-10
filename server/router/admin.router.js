import express from 'express' ;
import { deleteContactById, deleteReviewById, getAllContacts } from '../controller/adminOne.controller.js';
import { validate } from '../middleware/validator.js';
import { createFaqSchema, updateFaqSchema } from '../test/Faq/faq.validator.js';
import { createFaq, createTerms, deleteFaq, deleteTerms, updateFaq, updateTerms } from '../controller/nav.controller.js';
import { createTermsSchema, updateTermsSchema } from '../test/TermsCond/termsandcond.validator.js';

const router = express.Router();

//Core Route : /api/admin

//Get all contact details
router
     .route('/all-contacts')
     .get(getAllContacts)

//Delete the Contact Details
router
     .route('/contact/:id/delete')
     .delete(deleteContactById)

//Delete Review Details
router
     .route('/review/:id/delete')
     .delete(deleteReviewById)

//Add Services
// router
//      .route('/add-service')
//      .post()

// //Edit Services
// router
//      .route('/service/:id/edit')
//      .put()

// //Delete Services
// router
//      .route('/service/:id/delete')
//      .delete()

// //Add Card Details
// router
//      .route('/add-card')
//      .post()

// //Edit Card Details
// router
//      .route('/card/:id/edit')
//      .put()

// //Delete Card Details
// router
//      .route('/card/:id/delete')
//      .delete()

//Add FAQs Details
router
     .route('/add-faq')
     .post(validate(createFaqSchema) , createFaq)

//Edit FAQs Details
router
     .route('/faq/:id/edit')
     .put(validate(updateFaqSchema) , updateFaq)

//Delete FAQs Details
router
     .route('/faq/:id/delete')
     .delete(deleteFaq)

//Add Terms & Cond Details
router
     .route('/add-terms-and-cond')
     .post(validate(createTermsSchema), createTerms)

//Edit Terms & Cond Details
router
     .route('/terms-and-cond/:id/edit')
     .put(validate(updateTermsSchema) , updateTerms)

//Delete Terms & Cond Details
router
     .route('/terms-and-cond/:id/delete')
     .delete(deleteTerms)

// //Add Img Slider Details
// router
//      .route('/add-img-slider')
//      .post()

// //Edit Img Slider Details
// router
//      .route('/img-slider/:id/edit')
//      .put()

// //Delete Img Slider Details
// router
//      .route('/img-slider/:id/delete')
//      .delete()

// //Add  Pricing  Details
// router
//      .route('/add-price')
//      .post()

// //Edit Pricing Details
// router
//      .route('/price/:id/edit')
//      .put()

// //Delete Pricing Details
// router
//      .route('/price/:id/delete')
//      .delete()


export default router;