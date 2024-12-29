
import { createSlice } from '@reduxjs/toolkit';
import { SearchPhotoListThunk } from './searchPhotoListThunk';

export const SearchSlice = createSlice({
    name: 'searchPhotos',
    initialState: {
        data: '',
        status: 'idle',
        error: false
    },
    reducers: {
        'searchTerm': (state, action) => {
            state = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(SearchPhotoListThunk.pending, (state, action) => {
            state.status = 'pending'
        })
            .addCase(SearchPhotoListThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.data = action.payload
            })
            .addCase(SearchPhotoListThunk.rejected, (state, action) => {
                state.error = true
                state.status = 'rejected'
            })
    }
})

export const getSearchPhotoData = (state) => state.photos.data
export const getSearchPhotoStatus = (state) => state.photos.status
export const getSearchPhotoError = (state) => state.photos.error

export const { searchTerm } = SearchSlice.actions