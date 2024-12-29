
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import "./searchPhotos.css"
import { getRandomPhotoData, getRandomPhotoStatus, getRandomPhotoError } from '../../features/random/randomPhotoListSlice.js'
import { RandomPhotoListThunk } from "../../features/random/randomPhotoListThunk.js"
import { getSearchPhotoData, getSearchPhotoStatus, getSearchPhotoError } from '../../features/search/searchPhotoListSlice.js'
import { SearchPhotoListThunk } from '../../features/search/searchPhotoListThunk.js';
import { ContainerPhotos } from "../../components/containerPhotos/containerPhotos.jsx"
import { ButtonSort } from '../../components/buttonSort/buttonSort.jsx';

export const PageSearchPhotos = () => {

    const navigate = useNavigate();
    const goToPage2 = () => {
        navigate('/myPhotos');
    }
    const dispatch = useDispatch()

    const randomPhotoList = useSelector(getRandomPhotoData)
    const randomPhotoLoading = useSelector(getRandomPhotoStatus)
    const randomPhotoError = useSelector(getRandomPhotoError)       // <-- USAR ESTO
    useEffect(() => {
        if (randomPhotoLoading === "idle") { dispatch(RandomPhotoListThunk()) }
        else if (randomPhotoLoading === "fulfilled") { }
        else if (randomPhotoLoading === "rejected") { alert("Error en la api") }
    }, [randomPhotoLoading])

    // const searchPhotoList = useSelector(getSearchPhotoData)
    // const searchPhotoLoading = useSelector(getSearchPhotoStatus)
    // const searchPhotoError = useSelector(getSearchPhotoError)       // <-- USAR ESTO
    // useEffect(() => {
    //     if (searchPhotoLoading === "idle") { dispatch(SearchPhotoListThunk("manzana")) }
    //     else if (searchPhotoLoading === "fulfilled") { }
    //     else if (searchPhotoLoading === "rejected") { alert("Error en la api") }
    // }, [searchPhotoLoading])

    const handleInputTerm = (e) => {
        const inputText = e.target.value
        inputText === "" ?
            dispatch(RandomPhotoListThunk()) :
            dispatch(SearchPhotoListThunk(inputText))
    }

    return (
        <>
            <div className="containerHeader">
                <h2 className="title">PhotoApp</h2>
                <input className="input" id='inputSearch' onClick={handleInputTerm} type='search' placeholder='Search photos' />
            </div>
            <div className="containerButtons">
                <ButtonSort />
                <button className="button buttonSwitchPage1" onClick={goToPage2}>Go to<br />my photos</button>
            </div>
            {randomPhotoList === "pending" ?
                <p>Loading...</p> :
                <ContainerPhotos photoList={randomPhotoList} />
            }
        </>
    )

}