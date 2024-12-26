
import { useNavigate } from 'react-router-dom';

import "./searchPhotos.css"
import { ContainerPhotos } from "../../components/containerPhotos/containerPhotos.jsx"

export const PageSearchPhotos = () => {

    const navigate = useNavigate();
    const goToPage2 = () => {
        navigate(`/myPhotos`);
    }

    return (
        <>
            <div className="containerHeader">
                <h2 className="title">PhotoApp</h2>
                <input className="input" placeholder="Search photos" />
            </div>
            <div className="containerButtons">
                <button className="buttonGoToPage2">Sort by</button>
                <button className="buttonGoToPage2" onClick={goToPage2}>Go to<br />my photos</button>
            </div>
            <ContainerPhotos />
        </>
    )

}