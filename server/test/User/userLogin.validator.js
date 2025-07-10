import Joi from "joi";
const loginSchema = Joi.object({
  emailOrPhone: Joi.alternatives()
    .try(
      Joi.string().email(),
      Joi.string().pattern(/^[0-9]{10}$/)
    )
    .required()
    .messages({
      "alternatives.match": "Enter a valid email or 10-digit phone number.",
      "string.empty": "Email or phone is required.",
      "any.required": "Email or phone is required."
    }),

  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long.",
    "string.empty": "Password is required.",
    "any.required": "Password is required."
  }),
});

export { loginSchema };
