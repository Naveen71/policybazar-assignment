import './EmployeeListItem.css'
import { Link } from 'react-router-dom'

export default function EmployeeListItem(props){
    return (
        <Link to={`/about-employee?id=${props.data.id}`}>
            <div className="listItemContainer">
                <li key = {props.data.id}> 
                    <h2 className="listItemName">{props.data.first_name + " " + props.data.last_name}</h2>
                </li>
            </div>
        </Link>
        
    )
}