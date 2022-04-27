import express from "express";
import dottenv from "dotenv/config";
import mongoose from "mongoose";
import cors from "cors"

import homeRoutes from "./routes/homeRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";

const port = process.env.PORT || 5000;
const urlDataBase = process.env.CONNECTION_URL || null;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

app.use('/', homeRoutes);
app.use('/users',usersRoutes);
app.use('/movies',moviesRoutes);


mongoose.connect(urlDataBase, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        console.log("Succesfully connected to the database!");
    })
    .catch((eror) =>{
        console.log("An error accured when connecting to the database!")
    })

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    
})

