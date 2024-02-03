import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice';
import MoviesReduces from './movieSlice'
const appStore = configureStore({

    reducer:{
        user:UserReducer,
        movies:MoviesReduces,
    },
});

export default appStore;
