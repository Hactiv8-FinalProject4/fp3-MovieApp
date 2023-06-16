import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movieSlice";
import detailReducer from "./slice/detailSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        detail : detailReducer,
    },
});

export default store;