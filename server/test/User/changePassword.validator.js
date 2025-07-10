import Joi from "joi";
const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required().messages({
    "any.required": "Current password is required.",
    "string.empty": "Current password is required.",
  }),
  newPassword: Joi.string().min(6).required().messages({
    "string.min": "New password must be at least 6 characters.",
    "any.required": "New password is required.",
  }),
});

export {changePasswordSchema};