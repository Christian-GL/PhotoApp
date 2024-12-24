
import { createSlice } from "@reduxjs/toolkit";
import { GetPhotoListThunk } from "./photoThunk";

export const PhotoSlice = createSlice({
    name: "photos",
    initialState: {
        data: [],
        status: "idle",
        error: false
    },
    reducers: {
        "AddPhoto": (state, action) => {
            state.data.push({name: action.payload})
        }
    },
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
export const getPhotoError= (state) => state.photos.error

export const { AddPhoto } = PhotoSlice.actions