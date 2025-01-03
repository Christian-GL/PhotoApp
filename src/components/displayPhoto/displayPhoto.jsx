
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveAs } from 'file-saver';

import './displayPhoto.css'
import { Popup } from "../popup/popup.jsx";
import { addPhoto, removePhoto, getFavoritePhotoList } from "../../features/favoriteSlice/favoritePhotoSlice.js";
import { getPhotoListFromLocalStorage } from "../../features/favoriteSlice/favoritePhotoSlice.js";


export const DisplayPhoto = (props) => {

    const dispatch = useDispatch()
    const [descriptionEditable, setDescriptionEditable] = useState(false)

    const showPopup = () => {
        console.log('show')
        const popup = document.getElementById(`popup-${props.data.id}`)
        popup.classList.add('displayFlex')
    }

    const downloadPhoto = () => {
        console.log(props.data)
        saveAs(props.data.urlFull, `${props.data.description}.jpg`);
    }

    const configuratePhoto = () => {
        setDescriptionEditable(true)
        showPopup()
    }

    const isFavorite = () => {
        // const photoListFromStorage = useSelector(getPhotoListFromLocalStorage)
        const favoritePhotoList = useSelector(getFavoritePhotoList)
        for (let i = 0; i < favoritePhotoList.length; i++) {
            if (favoritePhotoList[i].id === props.data.id) {
                return true
            }
        }
        return false
    }

    const makeFavoritePhoto = () => {
        // localStorage.setItem(props.data.id, JSON.stringify(props.data))
        dispatch(addPhoto(props.data))
        const imgNonFavorite = document.getElementById(`nonFavorite-${props.data.id}`)
        const imgFavorite = document.getElementById(`favorite-${props.data.id}`)
        imgFavorite.classList.remove('displayNone')
        imgFavorite.classList.add('displayBlock')
        imgNonFavorite.classList.remove('displayBlock')
        imgNonFavorite.classList.add('displayNone')
    }
    const makeNonFavoritePhoto = () => {
        // localStorage.removeItem(props.data.id, JSON.stringify(props.data))
        dispatch(removePhoto(props.data))
        const imgNonFavorite = document.getElementById(`nonFavorite-${props.data.id}`)
        const imgFavorite = document.getElementById(`favorite-${props.data.id}`)
        imgFavorite.classList.remove('displayBlock')
        imgFavorite.classList.add('displayNone')
        imgNonFavorite.classList.remove('displayNone')
        imgNonFavorite.classList.add('displayBlock')
    }

    // const sss = () => {
    //     return isFavorite() ? '' : ''
    // }

    return (
        <div className='containerPhoto' id={props.data.id}>
            <img className='photo' src={props.data.urlSmall} onClick={showPopup}></img>
            <img className='download' id={`download-${props.data.id}`} onClick={downloadPhoto} src='img\Download-icon.png'></img>
            <img className={`configuration ${props.displayConfiguration ? 'displayBlock' : 'displayNone'}`}
                id={`configuration-${props.data.id}`} onClick={configuratePhoto} src='img\Configuration-icon.png'></img>

            <img className={`nonFavorite ${isFavorite() ? 'displayNone' : 'displayBlock'}`}
                id={`nonFavorite-${props.data.id}`} onClick={makeFavoritePhoto} src='img\HeartVoided-icon.png'></img>
            <img className={`favorite ${isFavorite() ? 'displayBlock' : 'displayNone'}`}
                id={`favorite-${props.data.id}`} onClick={makeNonFavoritePhoto} src='img\Heart-icon.png'></img>

            <Popup data={props.data} descriptionEditable={descriptionEditable} />
        </div>
    )
}