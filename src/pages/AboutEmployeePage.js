import { connect } from 'react-redux';
import { getEmployeeData } from '../store/Actions';
import { useEffect, useState } from 'react';
import './AboutEmployeePage.css'
import { useNavigate } from 'react-router-dom';

function AboutEmployeePage(props){
    const [employeeDetails, setData] = useState(null);
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if(props.entireList && props.entireList.data){
            setData(props.entireList.data.filter(eachItem => eachItem.id === Number(id))[0])
        }
    },[props.entireList])

    if(employeeDetails){
        return (
            <div className='container'>
                <div className='parentContainer'>
                    <div className='childContainer'>
                        <h3>{`First Name: ${employeeDetails.first_name}`}</h3>
                        <h3>{`Last Name: ${employeeDetails.last_name}`}</h3>
                        <h3>{`Email: ${employeeDetails.email}`}</h3>
                    </div>
                    <img src= {employeeDetails.avatar} alt={employeeDetails.first_name} />
                </div>
                <button className= 'button' onClick={goBack}>GO BACK</button>
            </div>
        )
    }
    return <></>
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

export default connect(mapStateToProps,mapDispatchToProps)(AboutEmployeePage)