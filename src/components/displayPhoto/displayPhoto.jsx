
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveAs } from 'file-saver';

import './displayPhoto.css'
import { Popup } from "../popup/popup.jsx";
import { getPhotoListFromLocalStorage } from "../../features/favorite/favoritePhotoSlice.js";
import { addPhoto, removePhoto } from "../../features/favorite/favoritePhotoSlice";


export const refreshHearts = (photoList) => {
    for (let i = 0; i < photoList.length; i++) {
        setTimeout(function () {
            const imgNonFavorite = document.getElementById(`nonFavorite-${photoList[i].id}`)
            const imgFavorite = document.getElementById(`favorite-${photoList[i].id}`)
            if (imgNonFavorite && imgFavorite !== null) {
                imgNonFavorite.classList.add('displayNone')
                imgFavorite.classList.add('displayBlock')
            }
        }, 50);
    }
}

export const getSelectedPhoto = () => {
    setTimeout(function () {
        console.log('getSelectedPhoto')
        return {
            id: '1WqLUPvfvqIo',
            url: 'https://images.unsplash.com/photo-1734532873375-574fd74045c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2ODkzNzd8MHwxfGFsbHwyfHx8fHx8fHwxNzM1MDY0MzA2fA&ixlib=rb-4.0.3&q=85',
            width: 4990,
            height: 6643,
            likes: 76,
            added: '2024-12-18T14:57:12Z',
            description: 'un-reloj-en-el-costado-de-un-edificio-verde-WqLUPvfvqIo'
        }
    }, 50);
}

export const DisplayPhoto = (props) => {

    const dispatch = useDispatch()
    const photoListFromStorage = useSelector(getPhotoListFromLocalStorage)

    const showPopup = () => {
        setTimeout(function () {
            // selectedPhoto = props.data
            const popup = document.getElementById(`popup-${props.data.id}`)
            popup.classList.add('displayFlex')
        }, 50);
    }

    const downloadPhoto = () => {
        saveAs(props.data.url, `${props.data.description}.jpg`);
    }

    if (props.displayConfiguration === true) {
        setTimeout(function () {
            const popup = document.getElementById(`configuration-${props.data.id}`)
            popup.classList.add('displayBlock')
        }, 50);
    }
    const configuratePhoto = () => {
        console.log('configurate')
    }

    const makeFavoritePhoto = () => {
        localStorage.setItem(props.data.id, JSON.stringify(props.data))
        // dispatch(addPhoto(props.data))
        const imgNonFavorite = document.getElementById(`nonFavorite-${props.data.id}`)
        const imgFavorite = document.getElementById(`favorite-${props.data.id}`)
        imgNonFavorite.classList.add('displayNone')
        imgFavorite.classList.add('displayBlock')
    }
    const makeNonFavoritePhoto = () => {
        localStorage.removeItem(props.data.id, JSON.stringify(props.data))
        // dispatch(removePhoto(props.data))
        const imgNonFavorite = document.getElementById(`nonFavorite-${props.data.id}`)
        const imgFavorite = document.getElementById(`favorite-${props.data.id}`)
        imgNonFavorite.classList.remove('displayNone')
        imgFavorite.classList.remove('displayBlock')
    }

    return (
        <div className='containerPhoto' id={props.data.id} onClick={showPopup}>
            <img className='photo' src={props.data.url}></img>
            <img className='download' id={`download-${props.data.id}`} onClick={downloadPhoto} src='img\Download-icon.png'></img>
            <img className='configuration' id={`configuration-${props.data.id}`} onClick={configuratePhoto} src='img\Configuration-icon.png'></img>
            <img className='nonFavorite' id={`nonFavorite-${props.data.id}`} onClick={makeFavoritePhoto} src='img\HeartVoided-icon.png'></img>
            <img className='favorite' id={`favorite-${props.data.id}`} onClick={makeNonFavoritePhoto} src='img\Heart-icon.png'></img>
            <Popup data={props.data} />
        </div>
    )
}