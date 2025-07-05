import dotenv from "dotenv";
dotenv.config({
    path:'./.env'
});
import mongoose from 'mongoose';
import {app} from './app.js';

const PORT = process.env.PORT || 3000;
console.log("PORT :" , PORT);
console.log("URI:", process.env.MONGODB_URI);


// Database configuration and Connection
const connectDB = () =>{
    main()
    .then(() =>{
        console.log("Server Connection Established !");
        app.listen(PORT , () => {
            console.log(`Backend Running at : http://localhost:${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.error("Failed to Connect with Database ! " , err);
    })
     async function main(){
      await  mongoose.connect(process.env.MONGODB_URI);
    }
}

connectDB();