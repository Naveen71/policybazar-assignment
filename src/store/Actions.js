import {GET_EMPLOYEE_DATA} from './actionTypes'

export function getEmployeeData(employeeData) {
    return {
        type: GET_EMPLOYEE_DATA,
        payload: employeeData
    }
}

export function makeInitialApiRequest() {
    return async dispatch => {
        try {
            const response = await fetch('https://reqres.in/api/users')
            const data = await response.json()
            dispatch(getEmployeeData(data))
        }
        catch(e){
            console.log(e);
        }
    }
    
}