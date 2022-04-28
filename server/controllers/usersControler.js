import User from "../models/userModel.js";

//@desc     Get user
//@route    GET /users/
//@access    Private
export const getUser = async (req, res) => {

    try {
        const users = await User.findOne({username: "rootUser"});

        console.log(req.body);
        res.status(200).json(users)

    } catch (error) {
        console.log("An error accured getting user");
        res.status(400);
    } 
}

//@desc     Get user id
//@route    GET /users/:id
//@access    Private
export const getUserId = (req,res) =>{
    const message = `Geting user ${req.params.userId}`;
    //console.log(message);
    res.status(200).json({message: message})
}


//@desc     Create user
//@route    POST /users/
//@access    Private
export const createUser = (req, res) => {
    //console.log("Getting User");

    console.log(req.body);
    res.status(200).json("User creating post")
}