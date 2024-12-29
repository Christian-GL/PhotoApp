
import { useParams, useNavigate } from 'react-router-dom';

import "../searchPhotos/searchPhotos.css"
import { ContainerPhotos } from "../../components/containerPhotos/containerPhotos.jsx"
import { ButtonSort } from '../../components/buttonSort/buttonSort.jsx';

export const PageLayout = () => {

    const pathName = window.location.pathname   // <-- Usar "Route" dijo Héctor
    const navigate = useNavigate();

    const goToPage1 = () => {
        navigate('/');
    }
    const goToPage2 = () => {
        navigate('/myPhotos');
    }

    return (
        <>
            <div className="containerHeader">
                <h2 className="title">PhotoApp</h2>
                {pathName === "/" ?
                    <input
                        className="input"
                        id='inputSearch'
                        onChange={handleInputTerm}
                        type='search'
                        placeholder='Search photos'
                    /> :
                    <input
                        className="input"
                        id='inputSearch'
                        onChange={handleInputTerm}
                        type='search'
                        placeholder='Search description'
                    />
                }
            </div>
            <div className="containerButtons">
                <ButtonSort />
                {pathName === "/" ?
                    <button className="button buttonSwitchPage1" onClick={goToPage2}>Go to<br />my photos</button> :
                    <button className="button buttonSwitchPage2" onClick={goToPage1}>Return to<br />Search photos</button>
                }
            </div>
            <ContainerPhotos />
        </>
    )

}