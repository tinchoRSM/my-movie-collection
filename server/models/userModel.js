import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add username']
    }
});

const User = mongoose.model('User',userSchema);

export default User;