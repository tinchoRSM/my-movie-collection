import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "templateUser",
    password: "templatePassowrd",
    favorites: [],
    notes: [],
    ratings: [],
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addFavorites: (state,action) =>{
            console.log(action.payload);
            const movie = action.payload;
            const newStateMovies = state.favorites;
            newStateMovies.push(movie);

            state.favorites = newStateMovies;
        },
        removeFavorites: (state,action) =>{
            console.log(action.payload);
            const movieId = action.payload;
            const newStateMovies = state.favorites.filter(el=>el.id!==movieId);

            state.favorites = newStateMovies;

        },
        addNote: (state,action) =>{

        }

    }
})

export const {addFavorites,removeFavorites, addNote} = 
    userSlice.actions;

export default userSlice.reducer;