import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    search: false,
    isLoading: true
}

const movieUrl = "http://localhost:8080/movies";

export const getMoviesFromApi = createAsyncThunk(
    'movies/getMoviesFromApi',async (name, thunkAPI) =>{
        try {
            const response = await fetch(movieUrl + `/${name}`);
            const data = await response.json();

            return data;

        } catch (error) {
            console.log(error)
        }
    })
    

export const moviesSclice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        setSerch: ()=>{
            
        }

    },
    extraReducers:{
        [getMoviesFromApi.pending]: (state) =>{
            state.isLoading = true;
        },
        [getMoviesFromApi.fulfilled]: (state,action) =>{
            state.isLoading = false;
            state.movies = action.payload;
        },
        [getMoviesFromApi.rejected]: (state,action) =>{
            state.isLoading = false;
        }
    }
})

export default moviesSclice.reducer;