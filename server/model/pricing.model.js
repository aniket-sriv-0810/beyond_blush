
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pricingSchema = new Schema ({
    category:{
        type:String,
        required:[true , "Please enter the Category !"],
        enum:["Basic Makeup" , "HD Makeup" , "Makeup Fusion"]
    },
    title:{
        type:String,
        required:[true , "Please enter the title !"]
    },
    includes:{
        type:String,
    },
    price:{
        type : Number,
        required:[true, "Please enter the price !"]
    }
} , {timestamps:true})

const Pricing = mongoose.model("Pricing" , pricingSchema);

export {Pricing};