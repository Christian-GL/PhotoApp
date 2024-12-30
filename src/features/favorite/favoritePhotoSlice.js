
import { createSlice } from '@reduxjs/toolkit';

export const getPhotoListFromLocalStorage = () => {
    const favoriteList = []
    const storageObject = { ...localStorage };
    const storageList = Object.keys(storageObject).map((key) => (
        storageObject[key])
    )
    for (let i = 0; i < storageList.length; i++) {
        const photo = JSON.parse(storageList[i])
        favoriteList.push(photo)
    }
    return favoriteList
}

export const FavoriteSlice = createSlice({
    name: 'favoritePhotos',
    initialState: getPhotoListFromLocalStorage(),
    reducers: {
        'addPhoto': (state, action) => {
            console.log('ola')
            // state.push(action.payload)
            localStorage.setItem(action.payload.id, JSON.stringify(action.payload))
        },
        'removePhoto': (state, action) => {
            // state.filter(photo => photo !== action.payload)
            localStorage.removeItem(action.payload.id, JSON.stringify(action.payload))
        }
    }
})

export const { addPhoto, removePhoto } = FavoriteSlice.actions