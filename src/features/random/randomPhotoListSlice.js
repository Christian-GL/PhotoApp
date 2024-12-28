
import { createSlice } from '@reduxjs/toolkit';
import { RandomPhotoListThunk } from './randomPhotoListThunk';

export const PhotoSlice = createSlice({
    name: 'randomPhotos',
    initialState: {
        data: [{
            id: 'WqLUPvfvqIo',
            url: 'https://images.unsplash.com/photo-1734532873375-574fd74045c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2ODkzNzd8MHwxfGFsbHwyfHx8fHx8fHwxNzM1MDY0MzA2fA&ixlib=rb-4.0.3&q=85',
            width: 4990,
            height: 6643,
            likes: 76,
            added: '2024-12-18T14:57:12Z',
            description: 'un-reloj-en-el-costado-de-un-edificio-verde-WqLUPvfvqIo'
        }],
        status: 'idle',
        error: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(RandomPhotoListThunk.pending, (state, action) => {
            state.status = 'pending'
        })
            .addCase(RandomPhotoListThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.data = action.payload
            })
            .addCase(RandomPhotoListThunk.rejected, (state, action) => {
                state.error = true
                state.status = 'rejected'
            })
    }
})

export const getRandomPhotoData = (state) => state.photos.data
export const getRandomPhotoStatus = (state) => state.photos.status
export const getRandomPhotoError = (state) => state.photos.error