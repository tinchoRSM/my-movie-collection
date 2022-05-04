import express from "express";
import dottenv from "dotenv/config";
import cors from "cors"

import homeRoutes from "./routes/homeRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";

import connectToDatabase from "./database/databaseConfig.js";


const port = process.env.PORT || 5000;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

app.use('/', homeRoutes);
app.use('/users',usersRoutes);
app.use('/movies',moviesRoutes);


connectToDatabase();


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    
})

