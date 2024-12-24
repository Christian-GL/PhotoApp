import { configureStore } from "@reduxjs/toolkit";
import { PhotoSlice } from "./features/photoSlice";

export const store = configureStore({
    reducer: {
        photos: PhotoSlice.reducer
    }
})