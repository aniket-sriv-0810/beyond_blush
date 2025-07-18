import Joi from "joi";

const createServiceSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    "string.empty": "Title is required!",
    "any.required": "Title is required!",
  }),
});

const updateServiceSchema = Joi.object({
  title: Joi.string().trim().optional(),
});

export { createServiceSchema, updateServiceSchema };
