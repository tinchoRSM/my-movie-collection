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
            const movieId = action.payload;
            const newStateMovies = state.favorites;
            newStateMovies.push(movieId);

            state.favorites = newStateMovies;
        },
        removeFaforites: (state,action) =>{

        },
        addNote: (state,action) =>{

        }

    }
})

export const {addFavorites,removeFaforites, addNote} = 
    userSlice.actions;

export default userSlice.reducer;