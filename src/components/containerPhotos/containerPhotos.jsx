
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import './containerPhotos.css'
import { DisplayPhoto } from "../displayPhoto/displayPhoto.jsx"

export const ContainerPhotos = (props) => {

    return (
        <div className="containerPhotos">
            {
                props.photoList.map((photo, index) =>
                    <DisplayPhoto key={index} data={photo} />
                )
            }
        </div>
    )

}