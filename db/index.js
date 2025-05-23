import mongoose from "mongoose";
import {DB_NAME} from "../src/constants.js";
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async () => {
      try{
        const connectionInstance  = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
      } catch (error){
          console.log("MONGOD connection error ",error);
          process.exit(1)
      }
}

export default connectDB