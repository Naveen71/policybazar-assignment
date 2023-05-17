import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import employeeDataReducer from './employeeDataReducer'
import thunk from 'redux-thunk'

const store = createStore(employeeDataReducer, applyMiddleware(thunk))

export default store