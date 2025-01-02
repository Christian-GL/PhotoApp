
import './popup.css'

// PROPS = EDITABLE LA FOTO DEPENDIENDO DE SI SE CLICKO EN CONFIG BOTON O EN LA FOTO SOLO
export const Popup = (props) => {

    const addDocumentEvents = () => {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.popupContainer.classList.remove('popup-js')
            }
        })
        document.addEventListener('click', (event) => {
            if (!this.popupContainer.contains(event.target)) {
                this.popupContainer.classList.remove('popup-js')
            }
        })
    }

    const closePopup = () => {
        setTimeout(function () {
            console.log('close')
            const popup = document.getElementById(`popup-${props.data.id}`)
            popup.classList.remove('displayFlex')
        }, 50);
    }

    const saveChanges = () => { }

    return (
        <div id={`popup-${props.data.id}`} className='popup'>
            <p id='name' className='data'>
                <b>Name</b><br />
                {props.data.id}
            </p>
            <p id='width' className='data'>
                <b>Width: </b>
                {props.data.width} px
            </p>
            <p id='height' className='data'>
                <b>Height: </b>
                {props.data.height} px
            </p>
            <p id='likes' className='data'>
                <b>Likes: </b>
                {props.data.likes} ❤
            </p>
            <p id='added' className='data'>
                <b>Added: </b>
                {props.data.added}
            </p>
            <cite id='description' contentEditable={props.descriptionEditable}>
                <b>Description: </b>
                {props.data.description}
            </cite>
            <img id={`imgSave-${props.data.id}`} className='imgSave' src='img\Save-icon.png' onClick={saveChanges}></img>
            <img id={`imgX-${props.data.id}`} className='imgX' src='img\Transparent_X.png' onClick={closePopup}></img>
        </div>
    )
}