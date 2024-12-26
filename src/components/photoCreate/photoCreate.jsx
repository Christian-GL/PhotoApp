
import './photoCreate.css'

export const PhotoCreate = (props) => {

    const downloadPhoto = () => {
        console.log('downloaded')
    }
    const configuratePhoto = () => {
        console.log('configurate')
    }
    const favoritePhoto = () => {
        console.log('favorite')
    }
    
    return (
        <div id='containerPhoto'>
            <img id='photo' src={props.url}></img>
            <img id='download' onClick={downloadPhoto} src='img\Download-icon.png'></img>
            <img id='configuration' onClick={configuratePhoto} src='img\Configuration-icon.png'></img>
            <img id='favorite' onClick={favoritePhoto} src='img\HeartVoided-icon.png'></img>
        </div>
    )
}