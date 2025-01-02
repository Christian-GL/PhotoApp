
import { createSlice } from '@reduxjs/toolkit';
import { RandomPhotoListThunk } from './randomPhotoListThunk';
import { SearchPhotoListThunk } from './searchPhotoListThunk';

export const ApiPhotoListSlice = createSlice({
    name: 'apiPhotoList',
    initialState: {
        randomData: [{
            id: '1WqLUPvfvqIo',
            url: 'https://images.unsplash.com/photo-1734532873375-574fd74045c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2ODkzNzd8MHwxfGFsbHwyfHx8fHx8fHwxNzM1MDY0MzA2fA&ixlib=rb-4.0.3&q=85',
            width: 4990,
            height: 6643,
            likes: 76,
            added: '2024-12-18T14:57:12Z',
            description: 'un-reloj-en-el-costado-de-un-edificio-verde-WqLUPvfvqIo'
        }],
        searchData: [{
            id: '1WqLUPvfvqIo',
            url: 'https://images.unsplash.com/photo-1734532873375-574fd74045c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2ODkzNzd8MHwxfGFsbHwyfHx8fHx8fHwxNzM1MDY0MzA2fA&ixlib=rb-4.0.3&q=85',
            width: 4990,
            height: 6643,
            likes: 76,
            added: '2024-12-18T14:57:12Z',
            description: 'un-reloj-en-el-costado-de-un-edificio-verde-WqLUPvfvqIo'
        }],
        randomStatus: 'idle',
        searchStatus: 'idle',
        randomError: false,
        searchError: false
    },
    reducers: {},
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