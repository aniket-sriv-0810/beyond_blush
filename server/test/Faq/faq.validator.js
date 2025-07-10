
import Joi from "joi";

const createFaqSchema = Joi.object({
  ques: Joi.string().trim().required().messages({
    "string.empty": "Question is required.",
    "any.required": "Question is required.",
  }),
  ans: Joi.string().trim().required().messages({
    "string.empty": "Answer is required.",
    "any.required": "Answer is required.",
  }),
});

const updateFaqSchema = Joi.object({
  ques: Joi.string().trim().optional().messages({
    "string.empty": "Question cannot be empty.",
  }),
  ans: Joi.string().trim().optional().messages({
    "string.empty": "Answer cannot be empty.",
  }),
});

export { createFaqSchema, updateFaqSchema };
