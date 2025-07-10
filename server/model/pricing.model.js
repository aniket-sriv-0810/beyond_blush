
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pricingSchema = new Schema ({
    title:{
        title:String,
        required:[true , "Please enter the title !"]
    },
    includes:{
        title:String,
    },
    price:{
        title : Number,
        required:[true, "Please enter the price !"]
    }
} , {timestamps:true})

const Pricing = mongoose.model("Pricing" , pricingSchema);

export {Pricing};