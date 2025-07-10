// user.validation.js
import Joi from "joi";
import { User } from "../../model/user.model.js";

const objectIdPattern = /^[0-9a-fA-F]{24}$/;

const userSchemaValidation = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.base": "Name must be a string.",
    "string.empty": "Name is required.",
    "any.required": "Name is required.",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address.",
    "string.empty": "Email is required.",
    "any.required": "Email is required.",
  }),

  phone: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
    "string.pattern.base": "Phone number must be a 10-digit number.",
    "string.empty": "Phone number is required.",
    "any.required": "Phone number is required.",
  }),

  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long.",
    "string.empty": "Password is required.",
    "any.required": "Password is required.",
  }),

  role: Joi.string().valid("admin", "user").default("user").messages({
    "any.only": "Role must be either 'admin' or 'user'.",
  }),
});

//  Joi external async validation for unique email/phone
const userSchemaWithAsyncChecks = userSchemaValidation.external(async (value) => {
  const emailExists = await User.findOne({ email: value.email.toLowerCase() });
  if (emailExists) {
    throw new Error("Email is already registered.");
  }

  const phoneExists = await User.findOne({ phone: value.phone });
  if (phoneExists) {
    throw new Error("Phone number is already in use.");
  }
});

export { userSchemaValidation, userSchemaWithAsyncChecks };
