
import { createSlice } from '@reduxjs/toolkit';

export const getPhotoListFromLocalStorage = () => {
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
            console.log('ola')
            state.push(action.payload)
            localStorage.setItem(action.payload.id, JSON.stringify(action.payload))
        },
        'removePhoto': (state, action) => {
            state.filter(photo => photo !== action.payload)
            localStorage.removeItem(action.payload.id, JSON.stringify(action.payload))
        }
    }
})

export const getFavoritePhotoList = (state) => state.favoritePhotoList
export const { addPhoto, removePhoto } = FavoritePhotoListSlice.actions