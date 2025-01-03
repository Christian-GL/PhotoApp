
import { useDispatch } from "react-redux"

import './buttonSort.css'

export const ButtonSort = (props) => {

    const click = () => {
        console.log('click sort button')
        // console.log(props.photoList)
        // const select = document.getElementById(`select`)
        // const sortedImages = [...props.photoList].sort((a, b) => {
        //     if (select.value === "1") return b.likes - a.likes;
        //     if (select.value === "2") return new Date(b.added) - new Date(a.added);
        //     if (select.value === "3") return b.width - a.width;
        //     if (select.value === "4") return b.height - a.height;
        //     return 0;
        // })
        // const dispatch = useDispatch()
        // setPhotoList(randomPhotoList)
    }

    return (
        <button className="button buttonSortBy" onClick={click}>Sort by</button>
        // <select className="button buttonSortBy" id="select" onClick={click}>
        //     <option value="" disabled selected>OrderBy</option>
        //     <option value="1">Likes</option>
        //     <option value="2">Date</option>
        //     <option value="3">Width</option>
        //     <option value="4">Height</option>
        // </select>
    )
}