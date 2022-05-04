import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Please add username']
    },
    password: {
        type: String,
        required: [true, 'Please Enter password']
    },
    favorites: [{id: Number, poster: String}],
    ratings: [{id: Number, rating: Number}],
    notes: [{id: Number, body: String}]
});

const User = mongoose.model('User',userSchema);

export default User;