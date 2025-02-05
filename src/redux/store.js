import { configureStore } from "@reduxjs/toolkit";
import listSlice from './reducer/listslice'

const store = configureStore({
    reducer : {
        List : listSlice
    }
});

export default store;
