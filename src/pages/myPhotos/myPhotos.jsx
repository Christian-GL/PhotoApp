
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

// import "./myPhotos.css"
import '../searchPhotos/searchPhotos.css'
import { getPhotoListFromLocalStorage } from "../../features/favorite/favoritePhotoSlice.js";
import { ContainerPhotos } from "../../components/containerPhotos/containerPhotos.jsx"
import { ButtonSort } from '../../components/buttonSort/buttonSort.jsx';


export const PageMyPhotos = () => {

    const navigate = useNavigate();
    const photoListFromStorage = useSelector(getPhotoListFromLocalStorage)

    const goToPage1 = () => {
        navigate('/');
    }

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
            {/* {console.log('favoriteList return -->', favoriteList)} */}
            <ContainerPhotos photoList={photoListFromStorage} />
        </>
    )

}