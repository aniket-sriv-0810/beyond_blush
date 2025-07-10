import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Name is required.",
    "any.required": "Name is required."
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address.",
    "string.empty": "Email is required.",
    "any.required": "Email is required."
  }),

  phone: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
    "string.pattern.base": "Phone number must be a 10-digit number.",
    "string.empty": "Phone number is required.",
    "any.required": "Phone number is required."
  }),

  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long.",
    "string.empty": "Password is required.",
    "any.required": "Password is required."
  }),

  role: Joi.string().valid("user", "admin").default("user").messages({
    "any.only": "Role must be either 'user' or 'admin'."
  }),
});

export { registerSchema };
