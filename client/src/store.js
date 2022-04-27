import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movies/moviesSlice.js"
import userReducer from "./features/user/userSlice.js"
import searchReducer from "./features/search/searchSlice.js"


export const store = configureStore({
    reducer: {
        movies: movieReducer,
        user: userReducer,
        search: searchReducer
    }
})