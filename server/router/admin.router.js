import express from 'express' ;
import { deleteContactById, deleteReviewById, getAllContacts } from '../controller/adminOne.controller.js';
import { validate } from '../middleware/validator.js';
import { createFaqSchema, updateFaqSchema } from '../test/Faq/faq.validator.js';
import { createFaq, createTerms, deleteFaq, deleteTerms, updateFaq, updateTerms } from '../controller/nav.controller.js';
import { createTermsSchema, updateTermsSchema } from '../test/TermsCond/termsandcond.validator.js';
import { createPricingSchema, updatePricingSchema } from '../test/Pricing/pricing.validator.js';
import { addPricing, createSlider, deletePricing, deleteSlider, editSlider, updatePricing } from '../controller/adminTwo.controller.js';
import { upload, uploadCardFiles } from '../multer.js';
import { createServiceSchema, updateServiceSchema } from '../test/Service/service.validator.js';
import { createCard, createService, deleteCard, deleteService, updateCard, updateService } from '../controller/adminThree.controller.js';
import { createCardSchema, updateCardSchema } from '../test/Card/card.validator.js';

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

// Add Services
router
     .route('/add-service')
     .post(upload.single("image"), validate(createServiceSchema), createService)

//Edit Services
router
     .route('/service/:id/edit')
     .put(upload.single("image"), validate(updateServiceSchema), updateService)

//Delete Services
router
     .route('/service/:id/delete')
     .delete(deleteService)

//Add Card Details
router
     .route('/add-card')
     .post(uploadCardFiles , validate(createCardSchema) , createCard)

//Edit Card Details
router
     .route('/card/:id/edit')
     .put(uploadCardFiles , validate(updateCardSchema) , updateCard)

//Delete Card Details
router
     .route('/card/:id/delete')
     .delete(deleteCard)

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

//Add Img Slider Details
router
     .route('/add-img-slider')
     .post( upload.array("images" , 5)  ,createSlider)

//Edit Img Slider Details
router
     .route('/img-slider/:id/edit')
     .put(upload.array("images" , 5)  ,editSlider)

//Delete Img Slider Details
router
     .route('/img-slider/:id/delete')
     .delete(deleteSlider)

//Add  Pricing  Details
router
     .route('/add-price')
     .post(validate(createPricingSchema),addPricing)

//Edit Pricing Details
router
     .route('/price/:id/edit')
     .put(validate(updatePricingSchema),updatePricing)

//Delete Pricing Details
router
     .route('/price/:id/delete')
     .delete(deletePricing )


export default router;