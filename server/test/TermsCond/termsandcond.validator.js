// validations/termsCond.validation.js
import Joi from "joi";

const createTermsSchema = Joi.object({
  terms: Joi.string().trim().required().messages({
    "string.empty": "Terms & Conditions content is required.",
    "any.required": "Terms & Conditions content is required.",
  }),
});

const updateTermsSchema = Joi.object({
  terms: Joi.string().trim().optional().messages({
    "string.empty": "Terms & Conditions content cannot be empty.",
  }),
});

export { createTermsSchema, updateTermsSchema };
