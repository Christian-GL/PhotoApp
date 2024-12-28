
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import './containerPhotos.css'
import { getRandomPhotoData, getRandomPhotoStatus, getRandomPhotoError } from '../../features/random/randomPhotoListSlice.js'
import { getSearchPhotoData, getSearchPhotoStatus, getSearchPhotoError } from '../../features/search/searchPhotoListSlice.js'
import { RandomPhotoListThunk } from "../../features/random/randomPhotoListThunk.js"
import { DisplayPhoto } from "../displayPhoto/displayPhoto.jsx"

export const ContainerPhotos = () => {

    const dispatch = useDispatch()

    const randomPhotoList = useSelector(getRandomPhotoData)
    const randomPhotoLoading = useSelector(getRandomPhotoStatus)
    // const randomPhotoError = useSelector(getRandomPhotoError)       // <-- USAR ESTO

    useEffect(() => {
        if (randomPhotoLoading === "idle") {
            dispatch(RandomPhotoListThunk())
        }
        else if (randomPhotoLoading === "fulfilled") {
            // No hace falta hacer nada aquí
        }
        else if (randomPhotoLoading === "rejected") {
            alert("Error en la api")
        }
    }, [randomPhotoLoading])

    // AKI OTRO IUS EFECT

    return (
        <div className="containerPhotos">
            {randomPhotoLoading === "pending" ?
                <p>Loading...</p> :
                // {}
                randomPhotoList.map((photo, index) =>
                    <DisplayPhoto key={index} data={photo} />
                )
            }
        </div>
    )

}