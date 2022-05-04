import User from "../models/userModel.js";

const rootUserCreated = async () => {
    const rootUser = new User({
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
        
        try {
            await rootUser.save();
            console.log("Rootuser created succsessfully!");
        } catch (error) {
            console.log("Rootuser alreday created " + error.message)
        }
}

export default rootUserCreated;