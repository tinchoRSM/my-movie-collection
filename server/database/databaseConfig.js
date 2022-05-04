import mongoose from "mongoose";
import rootUserCreated from "./rootUserInitilise.js";

const urlDataBase = process.env.CONNECTION_URL || null;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(urlDataBase, { useNewUrlParser: true, useUnifiedTopology: true });
        
        console.log("Succesfully connected to the database!");

        //await rootUserCreated();

    } catch (error) {
        console.log("An error accured when connecting to the database!" + error.message)
    }
}

export default connectToDatabase;