
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

// import "./myPhotos.css"
import '../searchPhotos/searchPhotos.css'
import { getRandomPhotoData, getRandomPhotoStatus, getRandomPhotoError } from '../../features/random/randomPhotoListSlice.js'
import { RandomPhotoListThunk } from "../../features/random/randomPhotoListThunk.js"
import { ContainerPhotos } from "../../components/containerPhotos/containerPhotos.jsx"
import { ButtonSort } from '../../components/buttonSort/buttonSort.jsx';

export const PageMyPhotos = () => {

    const navigate = useNavigate();
    const goToPage1 = () => {
        navigate('/');
    }

    // const dispatch = useDispatch()
    // const randomPhotoList = useSelector(getRandomPhotoData)
    // const randomPhotoLoading = useSelector(getRandomPhotoStatus)
    // const randomPhotoError = useSelector(getRandomPhotoError)       // <-- USAR ESTO
    // useEffect(() => {
    //     if (randomPhotoLoading === "idle") { dispatch(RandomPhotoListThunk()) }
    //     else if (randomPhotoLoading === "fulfilled") { }
    //     else if (randomPhotoLoading === "rejected") { alert("Error en la api") }
    // }, [randomPhotoLoading])

    const favoriteObject = { ...localStorage };
    const favoriteList = Object.keys(favoriteObject).map((key) => (
        favoriteObject[key])
    )
    useEffect(() => {
        console.log(favoriteList)
    }, [favoriteList])

    const handleInputTerm = (e) => {
        const inputText = e.target.value
        // BUSQUEDA EN STORAGE LISTA - DESCRIPCIONES
    }

    return (
        <>
            <div className="containerHeader">
                <h2 className="title">PhotoApp</h2>
                <input className="input" id='inputSearch' onClick={handleInputTerm} type='search' placeholder='Search description' />
            </div>
            <div className="containerButtons">
                <ButtonSort />
                <button className="button buttonSwitchPage2" onClick={goToPage1}>Return to<br />Search photos</button>
            </div>

            <ContainerPhotos photoList={favoriteList} />
        </>
    )

}