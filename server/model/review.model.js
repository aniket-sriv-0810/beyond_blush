
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required !"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required!"],
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email format",
      },
    },
    rating: {
      type: Number,
      required: true,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
    },
    feedback: {
      type: String,
      required: [true, "Comment can't be empty"],
      trim: true,
    },
  },
  { timeseries: true }
);

// Convert email to lowercase
reviewSchema.pre("save", function (next) {
  if (this.isModified("email")) {
    this.email = this.email.toLowerCase();
  }
  next();
});
const Review = mongoose.model("Review" , reviewSchema);

export {Review};
