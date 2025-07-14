import Joi from "joi";

const createCardSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    "string.empty": "Title is required!",
    "any.required": "Title is required!",
  }),
  description: Joi.string().trim().required().messages({
    "string.empty": "Description is required!",
    "any.required": "Description is required!",
  }),
  serviceId: Joi.string().required().messages({
    "any.required": "Service ID is required to link card!",
  }),
});

const updateCardSchema = Joi.object({
  title: Joi.string().trim().optional(),
  description: Joi.string().trim().optional(),
});

export { createCardSchema, updateCardSchema };
