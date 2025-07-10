
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const termsCondSchema = new Schema ({
    terms:{
        type:String,
        trim:true,
        required:[true , "Please enter the Terms !"]
    },
} , {timestamps:true})

const TermsCond = mongoose.model("TermsCond" , termsCondSchema);

export {TermsCond};