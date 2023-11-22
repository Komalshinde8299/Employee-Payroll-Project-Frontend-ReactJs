import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import EmployeeTable from './EmployeeTable';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/home' element ={<Employee/>}></Route>
      <Route path='/table' element = {<EmployeeTable/>}></Route>

    
    
    </Routes>
    </BrowserRouter>
    
    </div>
  
  );
}

export default App;
