import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movies/moviesSlice.js"

export const store = configureStore({
    reducer: {
        movies: movieReducer,
    }
})