
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import './photoCreate.css'
import { getPhotoData, getPhotoStatus, getPhotoError } from '../../features/photoSlice.js'
import { GetPhotoListThunk } from "../../features/photoThunk.js"

export const PhotoCreate = () => {

    const dispatch = useDispatch()

    const PhotoList = useSelector(getPhotoData)
    const PhotoLoading = useSelector(getPhotoStatus)
    // const PhotoError = useSelector(getPhotoError)       // <-- USAR ESTO

    useEffect(() => {
        console.log(getPhotoStatus)

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
        <>
            {PhotoLoading === "pending" ?
                <p>Loading---</p> :

                <img className="img" src={PhotoList.url}></img>

                // PhotoList.map((photo, index) =>
                //     <p>{photo.id}</p>)
            }
        </>
    )

}