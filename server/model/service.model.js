import mongoose from "mongoose";
const Schema = mongoose.Schema;

const serviceSchema = new Schema ({
    title:{
        type:String,
        trim:true,
        required:[true,"Title is required !"]
    },
   image:{
    type:String,
    required:[true , "Image is required !"]
   }
} , {timestamps:true})

const Service = mongoose.model('Service' , serviceSchema);

export {Service};