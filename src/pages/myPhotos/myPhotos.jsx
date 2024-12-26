
import { useNavigate } from 'react-router-dom';

// import "./myPhotos.css"
import '../searchPhotos/searchPhotos.css'
import { ContainerPhotos } from "../../components/containerPhotos/containerPhotos.jsx"
import { InputSearch } from '../../components/inputSearch/inputSearch.jsx';
import { ButtonSort } from '../../components/buttonSort/buttonSort.jsx';

export const PageMyPhotos = () => {

    const navigate = useNavigate();
    const goToPage1 = () => {
        navigate('/');
    }

    return (
        <>
            <div className="containerHeader">
                <h2 className="title">PhotoApp</h2>
                <InputSearch placeholderText="Search description" />
            </div>
            <div className="containerButtons">
                <ButtonSort />
                <button className="button buttonSwitchPage2" onClick={goToPage1}>Return to<br />Search photos</button>
            </div>
            <ContainerPhotos />
        </>
    )

}