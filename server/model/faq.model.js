
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const faqSchema = new Schema ({
    ques:{
        title:String,
        required:[true , "Please enter the ques !"]
    },
    ans:{
        title : String,
        required:[true, "Please enter the answer !"]
    }
} , {timestamps:true})

const Faq = mongoose.model("Faq" , faqSchema);

export {Faq};