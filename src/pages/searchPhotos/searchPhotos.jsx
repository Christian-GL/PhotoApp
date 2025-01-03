
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import "./searchPhotos.css"
import { RandomPhotoListThunk } from "../../features/apiSlice/randomPhotoListThunk.js";
import { SearchPhotoListThunk } from "../../features/apiSlice/searchPhotoListThunk.js";
import {
    getRandomPhotoData, getRandomPhotoStatus, getRandomPhotoError,
    getSearchPhotoData, getSearchPhotoStatus, getSearchPhotoError, resetSearchPhotoStatus
} from "../../features/apiSlice/apiPhotoListSlice.js";
import { ButtonSort } from '../../components/buttonSort/buttonSort.jsx';
import { DisplayPhoto } from "../../components/displayPhoto/displayPhoto.jsx";

export const PageSearchPhotos = () => {

    const navigate = useNavigate()
    const goToPage2 = () => {
        navigate('/myPhotos')
    }

    const dispatch = useDispatch()
    const [photoList, setPhotoList] = useState([])
    const randomPhotoList = useSelector(getRandomPhotoData)
    const randomPhotoLoading = useSelector(getRandomPhotoStatus)
    const randomPhotoError = useSelector(getRandomPhotoError)       // <-- USAR ESTO
    const searchPhotoList = useSelector(getSearchPhotoData)
    const searchPhotoLoading = useSelector(getSearchPhotoStatus)
    const searchPhotoError = useSelector(getSearchPhotoError)       // <-- USAR ESTO

    useEffect(() => {
        if (randomPhotoLoading === "idle") { dispatch(RandomPhotoListThunk()) }
        else if (randomPhotoLoading === "fulfilled") { setPhotoList(randomPhotoList) }
        else if (randomPhotoLoading === "rejected") { alert("Error en la api") }
    }, [randomPhotoLoading])

    const makeSearchApiCall = (inputText) => {
        dispatch(SearchPhotoListThunk(inputText))
        setPhotoList(searchPhotoList)
        // if (searchPhotoLoading === "idle") { dispatch(SearchPhotoListThunk(inputText)) }
        // else if (searchPhotoLoading === "fulfilled") {
        //     setPhotoList(searchPhotoList)
        //     dispatch(resetSearchPhotoStatus())
        // }
        // else if (searchPhotoLoading === "rejected") { alert("Error en la api") }
    }

    const handleInputTerm = (e) => {
        const inputText = e.target.value
        inputText === "" ?
            setPhotoList(randomPhotoList) :
            makeSearchApiCall(inputText)
    }

    return (
        <div>
            <div className="containerHeader">
                <h2 className="title">PhotoApp</h2>
                <input className="input" id='inputSearch' onClick={handleInputTerm} type='search' placeholder='Search photos' />
            </div>
            <div className="containerButtons">
                <ButtonSort photoList={photoList} />
                <button className="button buttonSwitchPage1" onClick={goToPage2}>Go to<br />my photos</button>
            </div>
            {randomPhotoList === "pending" ?
                <p>Loading...</p> :
                <div className="containerPhotos"> {
                    photoList.map((photo, index) =>
                        <DisplayPhoto key={index} data={photo} />
                    )}
                </div>
            }
        </div>
    )

}