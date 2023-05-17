import './PaginationComponent.css'

export default function PaginationComponent(props){
    const pageNumbers = [...Array(props.totalPages + 1).keys()].slice(1)
    if(pageNumbers && pageNumbers.length === 0){
        return
    }

    return ( 
        <div className='paginationContainer'>
            {pageNumbers.map((eachPage,index)=>{
                return (
                <div className='paginationListItem' onClick={()=>props.onPageChange(index+1)}>
                    <p className='listItem'>{eachPage}</p>
                </div>)
            })}
        </div>
    )
}