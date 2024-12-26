
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import './containerPhotos.css'
import { getPhotoData, getPhotoStatus, getPhotoError } from '../../features/photoSlice.js'
import { GetPhotoListThunk } from "../../features/photoThunk.js"
import { PhotoCreate } from "../photoCreate/photoCreate.jsx"

export const ContainerPhotos = () => {

    const dispatch = useDispatch()

    const PhotoList = useSelector(getPhotoData)
    const PhotoLoading = useSelector(getPhotoStatus)
    // const PhotoError = useSelector(getPhotoError)       // <-- USAR ESTO

    useEffect(() => {
        // console.log(getPhotoStatus)

        if (PhotoLoading === "idle") {
            dispatch(GetPhotoListThunk())
        }
        else if (PhotoLoading === "fulfilled") {

        }
        else if (PhotoLoading === "rejected") {
            alert("Error en la api")
        }
    }, [PhotoLoading])

    return (
        <div className="containerPhotos">
            {PhotoLoading === "pending" ?
                <p>Loading...</p> :
                PhotoList.map((photo, index) =>
                    <PhotoCreate key={index} url={photo.url} />
                )
            }
        </div>
    )

}