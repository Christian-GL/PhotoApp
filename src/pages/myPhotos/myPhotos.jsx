
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import '../searchPhotos/searchPhotos.css'
import "./myPhotos.css"
import { getFavoritePhotoList } from "../../features/favoriteSlice/favoritePhotoSlice.js";
import { ButtonSort } from '../../components/buttonSort/buttonSort.jsx';
import { DisplayPhoto } from "../../components/displayPhoto/displayPhoto.jsx";


export const PageMyPhotos = () => {

    const navigate = useNavigate();
    const favoritePhotoList = useSelector(getFavoritePhotoList)

    const goToPage1 = () => {
        navigate('/');
    }

    const handleInputTerm = (e) => {
        const inputText = e.target.value
        // BUSQUEDA EN STORAGE LISTA - DESCRIPCIONES
    }

    return (
        <>
            <div className="containerHeader containerHeaderBackgroundPage2">
                <h2 className="title">PhotoApp</h2>
                <input className="input" id='inputSearch' onClick={handleInputTerm} type='search' placeholder='Search description' />
            </div>
            <div className="containerButtons">
                <ButtonSort />
                <button className="button buttonSwitchPage2" onClick={goToPage1}>Return to<br />Search photos</button>
            </div>
            <div className="containerPhotos"> {
                favoritePhotoList.map((photo, index) =>
                    <DisplayPhoto key={index} data={photo} displayConfiguration={true} />
                )}
            </div>
        </>
    )

}