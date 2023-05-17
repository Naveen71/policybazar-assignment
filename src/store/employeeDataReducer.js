import {GET_EMPLOYEE_DATA} from  './actionTypes'

const initialState = {}

const employeeDataReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EMPLOYEE_DATA : 
            return action.payload
        default: return state
    }
}

export default employeeDataReducer
