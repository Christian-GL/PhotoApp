
import "./searchPhotos.css"
import { PhotoCreate } from "../../components/photoCreate/photoCreate.jsx"

export const PageSearchPhotos = () => {

    return (
        <>
            <div className="container">
                <h2 className="title">PhotoApp</h2>
                <input className="input" placeholder="Search photos" />
            </div>
            {/* <PhotoCreate /> */}
        </>
    )

}