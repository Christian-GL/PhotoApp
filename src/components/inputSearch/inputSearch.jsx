
import './inputSearch.css'

export const InputSearch = (props) => {

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            getInputText()
        }
    })

    const getInputText = () => {
        const inputName = document.getElementById('inputSearch')
        let name = inputName.value
        console.log(name)

    }

    return (
        <input className="input" id='inputSearch' type='search' placeholder={props.placeholderText} />
    )
}