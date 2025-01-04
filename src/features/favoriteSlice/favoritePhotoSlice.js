
import { createSlice } from '@reduxjs/toolkit';

const getPhotoListFromLocalStorage = () => {
    const storageObject = { ...localStorage };
    const storageList = Object.keys(storageObject).map((key) => (
        storageObject[key])
    )
    const favoritePhotoList = []
    for (let i = 0; i < storageList.length; i++) {
        favoritePhotoList.push(JSON.parse(storageList[i]))
    }
    return favoritePhotoList
}

export const FavoritePhotoListSlice = createSlice({
    name: 'favoritePhotoList',
    initialState: getPhotoListFromLocalStorage(),
    reducers: {
        'addPhoto': (state, action) => {
            state.push(action.payload)
            localStorage.setItem(action.payload.id, JSON.stringify(action.payload))
        },
        'removePhoto': (state, action) => {
            state.pop(state.filter(photo => photo.id === action.payload.id))
            localStorage.removeItem(action.payload.id)
        }
    }
})

export const getFavoritePhotoList = (state) => state.favoritePhotoList
export const { addPhoto, removePhoto } = FavoritePhotoListSlice.actions