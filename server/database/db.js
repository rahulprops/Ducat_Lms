import mongoose from "mongoose";
import 'dotenv/config.js'

const dbConnect= async()=>{
 try {
    const db= await mongoose.connect(process.env.DB)
    if(db){
        console.log("database connect")
    }else{
        console.log("database connnection failed")
    }
 } catch (e) {
    throw new Error(e);
    
 }
}
export default dbConnect;