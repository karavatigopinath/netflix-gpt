import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice';
import MoviesReduces from './movieSlice';
import GPTSearch from './GPTSlice';
import LangReducer from './configSlice'
const appStore = configureStore({

    reducer:{
        user:UserReducer,
        movies:MoviesReduces,
        showGPTSearch : GPTSearch,
        selectLag:LangReducer
    },
});

export default appStore;
