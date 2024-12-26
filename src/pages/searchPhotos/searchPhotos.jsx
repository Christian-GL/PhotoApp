
import { useNavigate } from 'react-router-dom';


import "./searchPhotos.css"
import { ContainerPhotos } from "../../components/containerPhotos/containerPhotos.jsx"
import { InputSearch } from '../../components/inputSearch/inputSearch.jsx';
import { ButtonSort } from '../../components/buttonSort/buttonSort.jsx';

export const PageSearchPhotos = () => {

    const navigate = useNavigate();
    const goToPage2 = () => {
        navigate('/myPhotos');
    }

    return (
        <>
            <div className="containerHeader">
                <h2 className="title">PhotoApp</h2>
                <InputSearch placeholderText="Search photos" />
            </div>
            <div className="containerButtons">
                <ButtonSort />
                <button className="button buttonSwitchPage1" onClick={goToPage2}>Go to<br />my photos</button>
            </div>
            <ContainerPhotos />
        </>
    )

}