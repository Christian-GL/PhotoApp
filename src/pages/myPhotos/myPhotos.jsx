
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import '../searchPhotos/searchPhotos.css'
import "./myPhotos.css"
import { getFavoritePhotoList } from "../../features/favoriteSlice/favoritePhotoSlice.js";
import { ButtonSort } from '../../components/buttonSort/buttonSort.jsx';
import { DisplayPhoto } from "../../components/displayPhoto/displayPhoto.jsx";


export const PageMyPhotos = () => {

    const navigate = useNavigate();
    const basePhotoList = useSelector(getFavoritePhotoList)
    const [photoList, setPhotoList] = useState(useSelector(getFavoritePhotoList))

    const goToPage1 = () => {
        navigate('/');
    }

    const searchByDescription = (inputText) => {
        let newPhotoList = []
        for (let i = 0; i < basePhotoList.length; i++) {
            if (basePhotoList[i].description.includes(inputText)) {
                newPhotoList.push(basePhotoList[i])
            }
        }
        return newPhotoList
    }

    const handleInputTerm = (e) => {
        const inputText = e.target.value
        inputText === "" ?
            setPhotoList(basePhotoList) :
            setPhotoList(searchByDescription(inputText))
    }

    // setTimeout(function () {
    //     const selectType = document.getElementById('select')
    //     window.addEventListener('change', () => {
    //         let type = parseInt(selectType.value)
    //         const sortedImages = [...basePhotoList].sort((a, b) => {
    //             switch (type) {
    //                 case 1:
    //                     console.log(type)
    //                     return b.likes - a.likes;
    //                     break
    //                 case 2:
    //                     console.log(type)
    //                     return new Date(b.added) - new Date(a.added)
    //                     break
    //                 case 3:
    //                     console.log(type)
    //                     return b.width - a.width
    //                     break
    //                 case 4:
    //                     console.log(type)
    //                     return b.height - a.height
    //                     break
    //                 default:
    //                     break
    //             }
    //         })
    //         setPhotoList(sortedImages)
    //     })
    // }, 50);

    return (
        <>
            <div className="containerHeader containerHeaderBackgroundPage2">
                <h2 className="title">PhotoApp</h2>
                <input className="input" id='inputSearch' onChange={handleInputTerm} type='search' placeholder='Search by description' />
            </div>
            <div className="containerButtons">
                <ButtonSort data={basePhotoList} />
                {/* <select className="button buttonSortBy" id="select" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>OrderBy</option>
                    <option value="1">Likes</option>
                    <option value="2">Date</option>
                    <option value="3">Width</option>
                    <option value="4">Height</option>
                </select> */}



                <button className="button buttonSwitchPage2" onClick={goToPage1}>Return to<br />Search photos</button>
            </div>
            <div className="containerPhotos"> {
                photoList.map((photo, index) =>
                    <DisplayPhoto key={index} data={photo} displayConfiguration={true} />
                )}
            </div>
        </>
    )

}