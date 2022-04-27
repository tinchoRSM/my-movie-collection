import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: ""
};

const searchSclice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        setSearchInput: (state,action) =>{
            state.input = action.payload;
        }
    }
})

export  const {setSearchInput} = searchSclice.actions;

export default searchSclice.reducer;