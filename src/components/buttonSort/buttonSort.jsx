
import './buttonSort.css'

export const ButtonSort = () => {

    const click = () => {
        console.log('click sort button')
    }
    
    return (
        <button className="button buttonSortBy" onClick={click}>Sort by</button>
    )
}