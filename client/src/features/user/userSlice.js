import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    _id: "",
    username: "templateUser",
    password: "templatePassowrd",
    favorites: [],
    notes: [],
    ratings: [],
    loading: false
}

const apiUrl = "http://localhost:8080/users";
const apiUrlUser = "http://localhost:8080/users/626ff1555cac152a7a75b958"

export const getUserDataFromApi = createAsyncThunk(
    'user/getUserDataFromApi',async () =>{
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;

        } catch (error) {
            console.log(error)
        }
    }
)

export const postUserDataToApi = createAsyncThunk(
    'user/postUserDataToApi', async (state) =>{
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state)
            };

            const response = await fetch(apiUrl,requestOptions)

        } catch (error) {
            console.log(error)
        }
    }
)

export const updateUserDataToApi = createAsyncThunk(
    'user/updateUserDataToApi', async (state) =>{
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _id: state._id,
                    username: state.username,
                    password: state.password,
                    favorites: state.favorites,
                    notes: state.notes,
                    ratings: state.rating,
                })
            };

            const response = await fetch(apiUrlUser,requestOptions)

        } catch (error) {
            console.log(error)
        }
    }
)




const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addFavorites: (state,action) =>{
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
        },
        chnageRating: (state,action) =>{
            const rating = action.payload;
            const newStateRatings = state.ratings.filter(el => el.id!==rating.id);
            newStateRatings.push(rating);

            state.ratings = newStateRatings;

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
            state._id = action.payload._id;

            state.loading = true;

        },
        [getUserDataFromApi.rejected]: (state,action) =>{
            console.log("Counldn't connect to the server!")
        }
    }
})

export const {addFavorites,removeFavorites, addNote, addRating,chnageRating} = 
    userSlice.actions;

export default userSlice.reducer;