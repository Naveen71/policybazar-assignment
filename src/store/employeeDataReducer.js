import {actionTypes} from  './actionTypes'

const initialState = {}

const employeeDataReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.getEmployeeData : 
            return action.payload;
        default: return state
    }
}

export default employeeDataReducer
