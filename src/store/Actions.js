import {actionTypes} from './actionTypes'

export function getEmployeeData(employeeData) {
    return {
        type: actionTypes.getEmployeeData,
        payload: employeeData
    }
}

export function makeInitialApiRequest(pageNumber) {
    return async dispatch => {
        try {
            const url = `https://reqres.in/api/users?page=${pageNumber}&per_page=5`
            const response = await fetch(url)
            const data = await response.json()
            dispatch(getEmployeeData(data))
        }
        catch(e){
            console.log(e);
        }
    }
    
}