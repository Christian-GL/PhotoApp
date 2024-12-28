
import './inputSearch.css'
// import { SearchSlice } from '../'

export const InputSearch = (props) => {

    const getInputText = () => {
        const inputName = document.getElementById('inputSearch')
        let name = inputName.value
        console.log(name)
    }

    return (
        <input
            className="input"
            id='inputSearch'
            onChange={getInputText}
            type='search'
            placeholder={props.placeholderText}
        />
    )
}