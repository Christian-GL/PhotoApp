
import './popup.css'
import { useDispatch } from "react-redux"
import { addPhoto, removePhoto } from '../../features/favoriteSlice/favoritePhotoSlice'

// PROPS = EDITABLE LA FOTO DEPENDIENDO DE SI SE CLICKO EN CONFIG BOTON O EN LA FOTO SOLO
export const Popup = (props) => {

    const dispatch = useDispatch()

    // const addDocumentEvents = () => {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'Escape') {
    //             popupContainer.classList.remove('popup-js')
    //         }
    //     })
    //     document.addEventListener('click', (event) => {
    //         if (!popupContainer.contains(event.target)) {
    //             popupContainer.classList.remove('popup-js')
    //         }
    //     })
    // }

    const closePopup = () => {
        const popup = document.getElementById(`popup-${props.data.id}`)
        popup.classList.remove('displayFlex')
    }

    const saveChanges = () => {
        const newDescription = document.getElementById(`description-${props.data.id}`)
        let photoUpdated = props.data
        photoUpdated.description = newDescription.innerHTML
        // console.log(props.data)
        // console.log(photoUpdated)
        dispatch(removePhoto(props.data))
        dispatch(addPhoto(photoUpdated))
        closePopup()
    }

    return (
        <div id={`popup-${props.data.id}`} className='popup'>
            <div className='textAlignCenter'><b>Name</b>
                <p>{props.data.id}</p></div>

            <div className='addMarginTop'><b>Width: </b>
                <p className='data'>{props.data.width} px</p></div>

            <div><b>Height: </b>
                <p className='data'>{props.data.height} px</p></div>

            <div><b>Likes: </b>
                <p className='data'>{props.data.likes} ❤</p></div>

            <div><b>Added: </b>
                <p className='data'>{props.data.added}</p></div>

            <div className='addMarginTop'><b>Description: </b>
                <cite id={`description-${props.data.id}`} contentEditable={props.descriptionEditable}>
                    {props.data.description}
                </cite></div>

            <img id={`imgSave-${props.data.id}`} className={`imgSave ${props.descriptionEditable ? 'displayBlock' : 'displayNone'}`} src='img\Save-icon.png' onClick={saveChanges}></img>
            <img id={`imgX-${props.data.id}`} className='imgX' src='img\Transparent_X.png' onClick={closePopup}></img>
        </div>
    )
}