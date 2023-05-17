import EmployeeListItem from './EmployeeListItem'

export default function EmployeeList(props){
    if(!props.listData){
        return
    }
    return (
        <ul>
            {props.listData.map((eachListItem)=> <EmployeeListItem data = {eachListItem}/> )}
        </ul>
    )
}