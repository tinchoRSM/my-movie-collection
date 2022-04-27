import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add username']
    },
    password: {
        type: String,
        required: [true, 'Please Enter password']
    },
    favorites: [{movieId: Number}],
    ratings: [{movieId: Number, rating: Number}],
    notes: [{movieId: Number, body: String}]
});

const User = mongoose.model('User',userSchema);

export default User;