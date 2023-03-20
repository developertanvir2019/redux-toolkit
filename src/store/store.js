import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../post/postSlice";

const store = configureStore({
    reducer: {
        post: postSlice,
    }
})

export default store;