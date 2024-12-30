
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import './containerPhotos.css'
import { refreshHeart } from "../../components/displayPhoto/displayPhoto.jsx";
import { getPhotoListFromLocalStorage } from "../../features/favorite/favoritePhotoSlice.js";
import { DisplayPhoto } from "../displayPhoto/displayPhoto.jsx"

export const ContainerPhotos = (props) => {

    const photoListFromStorage = useSelector(getPhotoListFromLocalStorage)

    return (
        <div className="containerPhotos">
            {
                props.photoList.map((photo, index) =>
                    <DisplayPhoto key={index} data={photo} />
                )
            }
            {refreshHeart(photoListFromStorage)}
        </div>
    )

}