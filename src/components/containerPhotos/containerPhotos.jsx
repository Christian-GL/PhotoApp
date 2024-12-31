
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import './containerPhotos.css'
import { refreshHearts } from "../../components/displayPhoto/displayPhoto.jsx";
import { getPhotoListFromLocalStorage } from "../../features/favorite/favoritePhotoSlice.js";
import { DisplayPhoto, getSelectedPhoto } from "../displayPhoto/displayPhoto.jsx"
import { Popup } from "../popup/popup.jsx";

export const ContainerPhotos = (props) => {

    const photoListFromStorage = useSelector(getPhotoListFromLocalStorage)
    // const selectedPhoto = useSelector(getSelectedPhoto)
    const photo = {
        id: '1WqLUPvfvqIo',
        url: 'https://images.unsplash.com/photo-1734532873375-574fd74045c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2ODkzNzd8MHwxfGFsbHwyfHx8fHx8fHwxNzM1MDY0MzA2fA&ixlib=rb-4.0.3&q=85',
        width: 4990,
        height: 6643,
        likes: 76,
        added: '2024-12-18T14:57:12Z',
        description: 'un-reloj-en-el-costado-de-un-edificio-verde-WqLUPvfvqIo'
    }

    return (
        <div className="containerPhotos">
            {
                props.photoList.map((photo, index) =>
                    <DisplayPhoto key={index} data={photo} displayConfiguration={props.displayConfiguration} />
                )
            }
            {/* <Popup data={selectedPhoto}/> */}
            {refreshHearts(photoListFromStorage)}
        </div>
    )

}