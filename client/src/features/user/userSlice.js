import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "templateUser",
    password: "templatePassowrd",
    favorites: [],
    notes: [],
    ratings: [{id: "157336", rating: 5}],
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addFavorites: (state,action) =>{
            // const movie = action.payload;
            // const newStateMovies = state.favorites;
            // newStateMovies.push(movie);

            // state.favorites = newStateMovies;

            const movie = action.payload;
            state.favorites = [movie, ...state.favorites]
        },
        removeFavorites: (state,action) =>{
            const movieId = action.payload;
            const newStateMovies = state.favorites.filter(el=>el.id!==movieId);

            state.favorites = newStateMovies;

        },
        addNote: (state,action) =>{

        },
        addRating: (state,action) =>{
            const rating = action.payload;

            state.ratings = [rating, ...state.ratings]
        }

    }
})

export const {addFavorites,removeFavorites, addNote, addRating} = 
    userSlice.actions;

export default userSlice.reducer;