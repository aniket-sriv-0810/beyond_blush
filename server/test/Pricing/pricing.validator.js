
import Joi from "joi";

const createPricingSchema = Joi.object({
  category: Joi.string()
    .valid("Basic Makeup", "HD Makeup", "Makeup Fusion")
    .required()
    .messages({
      "any.only": "Category must be one of Basic Makeup, HD Makeup, or Makeup Fusion.",
      "any.required": "Category is required.",
    }),

  title: Joi.string().trim().required().messages({
    "string.empty": "Title is required.",
    "any.required": "Title is required.",
  }),

  includes: Joi.string().trim().allow("").optional(),

  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number.",
    "number.positive": "Price must be a positive number.",
    "any.required": "Price is required.",
  }),
});

const updatePricingSchema = Joi.object({
  category: Joi.string().valid("Basic Makeup", "HD Makeup", "Makeup Fusion").optional(),
  title: Joi.string().trim().optional(),
  includes: Joi.string().trim().allow("").optional(),
  price: Joi.number().positive().optional(),
});

export { createPricingSchema, updatePricingSchema };
