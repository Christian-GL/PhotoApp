
import { useEffect } from "react"
import { saveAs } from 'file-saver';

import './displayPhoto.css'

export const DisplayPhoto = (props) => {

    const downloadPhoto = () => {
        saveAs(props.data.url, `${props.data.description}.jpg`);
    }

    const configuratePhoto = () => {
        console.log('configurate')
    }

    const refreshHeart = () => {
        console.log(localStorage.getItem(props.data.id))
        if (localStorage.getItem(props.data.id !== null)) {
            const imgNonFavorite = document.getElementById(`nonFavorite-${props.data.id}`)
            const imgFavorite = document.getElementById(`favorite-${props.data.id}`)
            imgNonFavorite.classList.add('displayNone')
            imgFavorite.classList.add('displayBlock')
        }
    }

    const makeFavoritePhoto = () => {
        localStorage.setItem(props.data.id, props.data)
        const imgNonFavorite = document.getElementById(`nonFavorite-${props.data.id}`)
        const imgFavorite = document.getElementById(`favorite-${props.data.id}`)
        imgNonFavorite.classList.add('displayNone')
        imgFavorite.classList.add('displayBlock')
    }
    const makeNonFavoritePhoto = () => {
        localStorage.removeItem(props.data.id, props.data)
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
        </div>
    )
}