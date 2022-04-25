import fetch from "node-fetch";
import movieDataParser from "./helpers/movieDataParser.js";

//@desc     Get movies from other api
//@route    GET /movies
//@access   Public
export const getMovies = async (req,res) => {
    try {
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.MOVIE_API_KEY}`
        const response = await fetch(url);
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        console.log("Couldn't connet to moive api " + error.message);
        res.status(500);
    }
};

export const getMovieByName = async(req,res) => {
    try {
        const movieName = req.params.movieName;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${movieName}`;

        const response = await fetch(url);
        const data = await response.json()
        const parsedData = movieDataParser(data);
        res.status(200).json(parsedData);
    } catch (error) {
        console.log("Couldn't connet to moive api " + error.message);
        res.status(500);
    }
}