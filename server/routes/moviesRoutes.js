import express from "express";

import { getMovieByName, getMovies } from "../controllers/moviesControler.js";

const router = express.Router();

router.get('/', getMovies);
router.get('/:movieName', getMovieByName);


export default router;