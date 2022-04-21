import fetch from "node-fetch";


//@desc     Get movies from other api
//@route    GET /movies
//@access   Public
export const getMovies = async (req,res) => {
    try {
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.MOVIE_API_KEY}`
        const response = await fetch(url);
        const data = await response.json();

        res.json(data)
    } catch (error) {
        console.log("Coundlnt coonet to triva apia " + error.message);
        res.status(500);
    }
};