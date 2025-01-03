
import { createSlice } from '@reduxjs/toolkit';
import { RandomPhotoListThunk } from './randomPhotoListThunk';
import { SearchPhotoListThunk } from './searchPhotoListThunk';

export const ApiPhotoListSlice = createSlice({
    name: 'apiPhotoList',
    initialState: {
        randomData: [],
        searchData: [],
        randomStatus: 'idle',
        searchStatus: 'idle',
        randomError: false,
        searchError: false
    },
    reducers: {
        'resetSearchPhotoStatus': (state) => {
            state.searchStatus = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(RandomPhotoListThunk.pending, (state) => {
                state.randomStatus = 'pending'
            })
            .addCase(RandomPhotoListThunk.fulfilled, (state, action) => {
                state.randomStatus = 'fulfilled'
                state.randomData = action.payload
            })
            .addCase(RandomPhotoListThunk.rejected, (state) => {
                state.randomError = true
                state.randomStatus = 'rejected'
            })

            .addCase(SearchPhotoListThunk.pending, (state) => {
                state.searchStatus = 'pending'
            })
            .addCase(SearchPhotoListThunk.fulfilled, (state, action) => {
                state.searchStatus = 'fulfilled'
                state.searchData = action.payload
            })
            .addCase(SearchPhotoListThunk.rejected, (state) => {
                state.searchError = true
                state.searchStatus = 'rejected'
            })
    }
})

export const getRandomPhotoData = (state) => state.apiPhotoList.randomData
export const getRandomPhotoStatus = (state) => state.apiPhotoList.randomStatus
export const getRandomPhotoError = (state) => state.apiPhotoList.randomError

export const getSearchPhotoData = (state) => state.apiPhotoList.searchData
export const getSearchPhotoStatus = (state) => state.apiPhotoList.searchStatus
export const getSearchPhotoError = (state) => state.apiPhotoList.searchError

export const { resetSearchPhotoStatus } = ApiPhotoListSlice.actions