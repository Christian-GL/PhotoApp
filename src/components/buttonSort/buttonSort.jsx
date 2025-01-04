
import { useDispatch } from "react-redux"
// import React, { useContext } from "react"

import './buttonSort.css'

export const ButtonSort = (props) => {

    // const click = () => {
    //     console.log('click sort button')
    // }

    const sss = () => {
        // setTimeout(function () {
        const selectType = document.getElementById('select')
        window.addEventListener('change', () => {
            let type = parseInt(selectType.value)
            const sortedPhotoList = [...props.data].sort((a, b) => {
                switch (type) {
                    case 1:
                        console.log(type)
                        return b.likes - a.likes;
                        break
                    case 2:
                        console.log(type)
                        return new Date(b.added) - new Date(a.added)
                        break
                    case 3:
                        console.log(type)
                        return b.width - a.width
                        break
                    case 4:
                        console.log(type)
                        return b.height - a.height
                        break
                    default:
                        break
                }
            })
            setPhotoList(sortedPhotoList)
        })
        // }, 50);
    }

    return (
        // <button className="button buttonSortBy" onClick={click}>Sort by</button>
        <select className="button buttonSortBy" id="select" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>OrderBy</option>
            <option value="1">Likes</option>
            <option value="2">Date</option>
            <option value="3">Width</option>
            <option value="4">Height</option>
        </select>
    )
}