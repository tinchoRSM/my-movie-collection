//@desc     Get home
//@route    GET /
//@access    Public
export const getHome = (req, res) => {
    res.send("Home route reached!");
}