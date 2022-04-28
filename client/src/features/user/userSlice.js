import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    username: "templateUser",
    password: "templatePassowrd",
    favorites: [],
    notes: [],
    ratings: [],
}

const apiUurl = "http://localhost:8080/users";

export const getUserDataFromApi = createAsyncThunk(
    'user/getUserDataFromApi',async () =>{
        try {
            const response = await fetch(apiUurl);
            const data = await response.json();
            return data;

        } catch (error) {
            console.log(error)
        }
    })



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

    },
    extraReducers:{
        [getUserDataFromApi.pending]: (state) =>{
            console.log("Connecting to server!")
        },
        [getUserDataFromApi.fulfilled]: (state,action) =>{
            console.log("Data recieved form the server!");
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.favorites = action.payload.favorites;
            state.ratings = action.payload.ratings;
            state.notes = action.payload.notes;

        },
        [getUserDataFromApi.rejected]: (state,action) =>{
            console.log("Counldn't connect to the server!")
        }
    }
})

export const {addFavorites,removeFavorites, addNote, addRating} = 
    userSlice.actions;

export default userSlice.reducer;