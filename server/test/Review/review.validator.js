import Joi from "joi";

const reviewSchemaValidation = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Name is required.",
    "any.required": "Name is required.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address.",
    "any.required": "Email is required.",
  }),
  rating: Joi.number().min(1).max(5).required().messages({
    "number.base": "Rating must be a number between 1 and 5.",
    "number.min": "Rating must be at least 1.",
    "number.max": "Rating cannot exceed 5.",
    "any.required": "Rating is required.",
  }),
  feedback: Joi.string().trim().min(5).required().messages({
    "string.empty": "Feedback cannot be empty.",
    "string.min": "Feedback must be at least 5 characters long.",
    "any.required": "Feedback is required.",
  }),
});

export { reviewSchemaValidation };
