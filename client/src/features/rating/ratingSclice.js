import { createSlice } from "@reduxjs/toolkit";

const initialState = {id: 0, rating: 0}

const ratingSlcie = createSlice({
    name: "rating",
    initialState: initialState,
    reducers:{
        setRating: (state,action) =>{
            //
            const rating = action.payload;
            state.id = rating.id;
            state.rating = rating.rating;
        }
    }
});

export const {setRating} = ratingSlcie.actions;

export default ratingSlcie.reducer;