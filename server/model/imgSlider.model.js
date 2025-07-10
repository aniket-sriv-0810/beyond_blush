
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const imgSliderSchema = new Schema ({
  images: {
      type: [String],
      required:[true , "Images can't be empty !"],
      validate: [
        {
          validator: function (arr) {
            return arr.length <= 5;
          },
          message: "A maximum of 5 images are allowed for slider.",
        },
      ],
    },
} , {timestamps:true})

const imgSlider = mongoose.model("imgSlider" , imgSliderSchema);

export {imgSlider};