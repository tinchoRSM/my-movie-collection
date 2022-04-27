import express from "express";

import { getMovieById, getMovieByName, getMovies } from "../controllers/moviesControler.js";

const router = express.Router();

router.get('/', getMovies);
router.get('/:movieName', getMovieByName);
router.get('/movie/:movieId', getMovieById)


export default router;