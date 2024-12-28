import { configureStore } from "@reduxjs/toolkit";
import { PhotoSlice } from "./features/random/randomPhotoListSlice";

export const store = configureStore({
    reducer: {
        photos: PhotoSlice.reducer
    }
})