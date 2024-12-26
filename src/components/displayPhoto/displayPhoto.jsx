
import './displayPhoto.css'

export const DisplayPhoto = (props) => {

    const thisPhoto = document.getElementById(props.data.id)        // null porque se lee antes de asignarle el id en el return

    const downloadPhoto = () => {
        console.log('downloaded')
        console.log(props.data.id)
        console.log(thisPhoto)
    }

    const configuratePhoto = () => {
        console.log('configurate')
    }

    const makeFavoritePhoto = () => {
        console.log('favorite')
        // thisPhoto.classList.add('nonFavoriteHide')
        // thisPhoto.classList.add('favoriteDisplay')
    }
    const makeNonFavoritePhoto = () => {
        console.log('nonFavorite')
        // thisPhoto.classList.remove('nonFavoriteHide')
        // thisPhoto.classList.remove('favoriteDisplay')
    }
    
    return (
        <div className='containerPhoto' id={props.data.id}>
            <img className='photo' src={props.data.url}></img>
            <img className='download' onClick={downloadPhoto} src='img\Download-icon.png'></img>
            <img className='configuration' onClick={configuratePhoto} src='img\Configuration-icon.png'></img>
            <img className='nonFavorite' onClick={makeFavoritePhoto} src='img\HeartVoided-icon.png'></img>
            <img className='favorite' onClick={makeNonFavoritePhoto} src='img\Heart-icon.png'></img>
        </div>
    )
}