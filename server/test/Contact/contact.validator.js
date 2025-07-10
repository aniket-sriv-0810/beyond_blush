import Joi from "joi";

const contactSchemaValidation = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Name is required.",
    "any.required": "Name is required.",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address.",
    "string.empty": "Email is required.",
    "any.required": "Email is required.",
  }),

  comment: Joi.string().trim().min(5).required().messages({
    "string.empty": "Comment cannot be empty.",
    "string.min": "Comment must be at least 5 characters long.",
    "any.required": "Comment is required.",
  }),
});

export { contactSchemaValidation };
