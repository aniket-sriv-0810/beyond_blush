import Joi from "joi";

// Create Service Schema
const createServiceSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    "string.empty": "Title is required!",
    "any.required": "Title is required!",
  }),
});

// Edit Service Schema
const updateServiceSchema = Joi.object({
  title: Joi.string().trim().optional(),
});

export { createServiceSchema, updateServiceSchema };
