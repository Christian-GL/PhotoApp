
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import './containerPhotos.css'
import { getPhotoListFromLocalStorage } from "../../features/favoriteSlice/favoritePhotoSlice.js";
import { DisplayPhoto } from "../displayPhoto/displayPhoto.jsx"

export const ContainerPhotos = (props) => {

    const photoListFromStorage = useSelector(getPhotoListFromLocalStorage)

    return (
        <div className="containerPhotos">
            {
                props.photoList.map((photo, index) =>
                    <DisplayPhoto key={index} data={photo} displayConfiguration={props.displayConfiguration} />
                )
            }
        </div>
    )

}