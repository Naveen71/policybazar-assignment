import { connect } from 'react-redux';
import { getEmployeeData,makeInitialApiRequest } from '../store/Actions';
import EmployeeList from '../components/EmployeeList';
import PaginationComponent from '../components/PaginationComponent'
import './EmployeeListPage.css'
import { useState, useEffect } from 'react';
import store from '../store/store';

function EmployeeListPage(props){
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    store.dispatch(makeInitialApiRequest(currentPage))
  },[currentPage]);

  const onPageChange = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  }

  console.log(props.entireList);
    if(!props.entireList.data || !props.entireList.data || props.entireList.data.length === 0){
      return
    }
    return (
        <div className='employeeList'>
          <h2>Employee List</h2>
          <h3>Click on employee for details</h3>
          <EmployeeList listData = {props.entireList.data}/>
          <PaginationComponent onPageChange = {onPageChange} currentPage = {currentPage} totalPages = {props.entireList.total_pages}/>
        </div>
      )
}

const mapStateToProps = state => {
    return {
      entireList: state
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      getIntialEmployeeData: () => dispatch(getEmployeeData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeListPage)