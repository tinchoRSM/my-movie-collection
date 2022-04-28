import express from "express";
import dottenv from "dotenv/config";
import mongoose from "mongoose";
import cors from "cors"

import homeRoutes from "./routes/homeRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";
import User from "./models/userModel.js";

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

var rootUser = new User({
    "username": "rootUser",
    "password": "rootPassowrd",
    "favorites": [
        {
            "id": 634649,
            "poster": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
            "id": 157336,
            "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        },
        {
            "id": 414906,
            "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
        }
    ],
    "notes": [],
    "ratings": [
        {
            "id": 634649,
            "rating": 4
        },
        {
            "id": 414906,
            "rating": 4
        }
    ]
})

rootUser.save();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    
})

