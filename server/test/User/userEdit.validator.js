import Joi from "joi";

const updateProfileSchema = Joi.object({
  name: Joi.string().trim().optional(),
  email: Joi.string().email().optional().messages({
    "string.email": "Please enter a valid email address."
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional()
    .messages({
      "string.pattern.base": "Phone number must be a 10-digit number.",
    }),
});

export {updateProfileSchema};