import User from "../models/userModel.js";

//@desc     Get user
//@route    GET /users/
//@access    Private
export const getUser = async (req, res) => {
    console.log("Getting users");
    try {
        const users = await User.findOne({username: "rootUser"});

        console.log("getting users");
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
    console.log(message);
    res.status(200).json({message: message})
}


//@desc     Create user
//@route    POST /users/
//@access    Private
export const createUser = (req, res) => {
    console.log("Creating User");

    
    console.log(req.body);
    res.status(200).json("User creating post")
}


//@desc     Create user
//@route    PUT /users/
//@access    Private
export const updateUser = async (req, res) => {
    console.log(`Updating User ${req.params.userId}`);

    try {
        const user = await User.findById(req.params.userId);
    } catch (error) {
        console.log(error.message)
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            {_id: req.params.userId},req.body);
    } catch (error) {
        console.log(error.message);
    }
    
    
    
    res.status(200).json({message: `User ${req.params.id} is updated`});
}

