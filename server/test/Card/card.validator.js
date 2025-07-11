import Joi from "joi";

// Create Card Schema
const createCardSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    "string.empty": "Title is required!",
    "any.required": "Title is required!",
  }),
  description: Joi.string().trim().required().messages({
    "string.empty": "Description is required!",
    "any.required": "Description is required!",
  }),
});

// Edit Card Schema
const updateCardSchema = Joi.object({
  title: Joi.string().trim().optional(),
  description: Joi.string().trim().optional(),
});

export { createCardSchema, updateCardSchema };
