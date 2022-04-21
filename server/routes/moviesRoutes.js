import express from "express";

import { getMovies } from "../controllers/moviesControler.js";

const router = express.Router();

router.get('/', getMovies);


export default router;