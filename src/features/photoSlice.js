
import { createSlice } from "@reduxjs/toolkit";
import { GetPhotoListThunk } from "./photoThunk";

export const PhotoSlice = createSlice({
    name: "photos",
    initialState: {
        data: [{
            id: 'id-Prueba',
            url: 'https://images.unsplash.com/photo-1734532873375-574fd74045c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2ODkzNzd8MHwxfGFsbHwyfHx8fHx8fHwxNzM1MDY0MzA2fA&ixlib=rb-4.0.3&q=85'
        }],
        status: "idle",
        error: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetPhotoListThunk.pending, (state, action) => {
            state.status = "pending"
        })
            .addCase(GetPhotoListThunk.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.data = action.payload
            })
            .addCase(GetPhotoListThunk.rejected, (state, action) => {
                state.error = true
                state.status = "rejected"
            })
    }
})

export const getPhotoData = (state) => state.photos.data
export const getPhotoStatus = (state) => state.photos.status
export const getPhotoError = (state) => state.photos.error