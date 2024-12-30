
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveAs } from 'file-saver';

import './displayPhoto.css'
import { getPhotoListFromLocalStorage } from "../../features/favorite/favoritePhotoSlice.js";
import { addPhoto, removePhoto } from "../../features/favorite/favoritePhotoSlice";


export const refreshHeart = (photoList) => {
    for (let i = 0; i < photoList.length; i++) {
        setTimeout(function () {
            const imgNonFavorite = document.getElementById(`nonFavorite-${photoList[i].id}`)
            const imgFavorite = document.getElementById(`favorite-${photoList[i].id}`)
            imgNonFavorite.classList.add('displayNone')
            imgFavorite.classList.add('displayBlock')
        }, 50);
    }
}

export const DisplayPhoto = (props) => {

    const dispatch = useDispatch()
    const photoListFromStorage = useSelector(getPhotoListFromLocalStorage)

    const downloadPhoto = () => {
        saveAs(props.data.url, `${props.data.description}.jpg`);
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
        <div className='containerPhoto' id={props.data.id}>
            <img className='photo' src={props.data.url}></img>
            <img className='download' id={`download-${props.data.id}`} onClick={downloadPhoto} src='img\Download-icon.png'></img>
            <img className='configuration' id={`configuration-${props.data.id}`} onClick={configuratePhoto} src='img\Configuration-icon.png'></img>
            <img className='nonFavorite' id={`nonFavorite-${props.data.id}`} onClick={makeFavoritePhoto} src='img\HeartVoided-icon.png'></img>
            <img className='favorite' id={`favorite-${props.data.id}`} onClick={makeNonFavoritePhoto} src='img\Heart-icon.png'></img>
            {/* {refreshHeart()} */}
        </div>
    )
}