import { connect } from 'react-redux';
import { getEmployeeData } from '../store/Actions';

function EmployeeListPage(props){
    console.log(props.totalList);
    return <h1>This is employee list</h1>
}

const mapStateToProps = state => {
    return {
      totalList: state
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      getIntialEmployeeData: () => dispatch(getEmployeeData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeListPage)