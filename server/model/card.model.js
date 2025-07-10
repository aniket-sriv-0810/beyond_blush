import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required!"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description is required!"],
    },
    images: {
      type: [String],
      validate: [
        {
          validator: function (arr) {
            return arr.length <= 10;
          },
          message: "A maximum of 10 images are allowed per card.",
        },
      ],
    },
    videos: {
      type: [String],
      validate: [
        {
          validator: function (arr) {
            return arr.length <= 3;
          },
          message: "A maximum of 3 videos are allowed per card.",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);
export { Card };
