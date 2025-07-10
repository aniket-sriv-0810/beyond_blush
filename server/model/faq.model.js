// models/faq.model.js
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const faqSchema = new Schema(
  {
    ques: {
      type: String,
      required: [true, "Please enter the question!"],
      trim: true,
    },
    ans: {
      type: String,
      required: [true, "Please enter the answer!"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Faq = mongoose.model("Faq", faqSchema);
export { Faq };
