import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:"gptSearch",
    initialState:{
        showGPTSearch: false,
        tmdbResult:null,
        movieNames:null
    },
    reducers:{
        toggleGPTSearch: (state)=>{
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTMovieResult: (state,action)=>{
          const {movieNames, tmdnResult} = action.payload;
           state.movieNames = movieNames;
           state.tmdbResult = tmdnResult;
        },
    }
})

export const  {toggleGPTSearch,addGPTMovieResult} = GPTSlice.actions;
export default GPTSlice.reducer;