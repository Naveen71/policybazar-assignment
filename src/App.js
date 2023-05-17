import './App.css';
import { Provider } from 'react-redux';
import store from './store/store'
import EmployeeListPage from './pages/EmployeeListPage'
import AboutEmployeePage from './pages/AboutEmployeePage'
import NotFound from './pages/NotFoundPage';
import {makeInitialApiRequest} from './store/Actions'
import {BrowserRouter, Route, Routes} from "react-router-dom"

store.dispatch(makeInitialApiRequest())

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path= '/'  element ={<EmployeeListPage/>}/>
          <Route exact path= '/about-employee' element={<AboutEmployeePage/>}/>
          <Route element = {<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
