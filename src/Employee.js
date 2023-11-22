import React, { useState } from 'react';
import './EmpStyle.css';
import EmployeeTable from './EmployeeTable';
import axios from 'axios';

function Employee(){
    const [name, setName] = useState(' ');
    const[gender, setGender] = useState(' ');
    const[department, setDepartment] = useState(' ');
    const[salary, setSalary] = useState(' ');
    const[day, setDay] = useState('');
    const[month, setMonth] = useState('');
    const[year, setYear] = useState('');
    const[notes, setNotes] = useState(' ');

    // let obj ={name:" ", gender:" ", department :" ", salary:" ", date:" ", notes:" "} 
    
  const handleSubmit = async () => {
    const employeeData = {
      name,
      gender,
      department,
      salary,
      date: `${day}-${month}-${year}`,
      notes,
    };

    try {
      
      const response = await axios.post('http://localhost:8082/employee/add', employeeData);
      console.log('Employee added to DB:', response.data);

      
      setName('');
      setGender('');
      setDepartment('');
      setSalary('');
      setDay('');
      setMonth('');
      setYear('');
      setNotes('');

      
    } catch (error) {
      console.error('Error adding employee to DB:', error);
      
    }
  };
  

    // const handleSubmit = () => {

    // // console.log(name);
    // // console.log(gender);
    // // console.log(department);
    // // console.log(salary);
    // // console.log(day);
    // // console.log(month);
    // // console.log(year);
    // // console.log(notes);
    // setName(name);
    // obj.name = name;
    // setGender(gender);
    // obj.gender = gender;
    // setDepartment(department);
    // obj.department = department;
    // setSalary(salary);
    // obj.salary = salary;
    // setDay(day);
    
    // setMonth(month);
    // setYear(year);
    // obj.date = day +"-" + month +"-" +year;
    // setNotes(notes);
    // obj.notes = notes
    // // console.log(obj);
    // localStorage.setItem("employee", []);
    // localStorage.getItem("employee").push(obj);

    // // console.log(localStorage.getItem("employee"))
    // 
    // }
    function handelName(){
        setName(document.getElementById("name").value);
   
    }
    function handelGender(){
        let genderOption = document.getElementsByName("gender");
        for( let e of genderOption){
            if(e.checked){
                setGender(e.value)
                
            }
        }
       

    }
    function handelDepartment(){
        let depOption = document.getElementsByName("department");
        for( let dep of depOption){
            if( dep.checked){
                setDepartment(dep.value);
            }
        }
        
    }
    function handelSalary(){
        setSalary(document.getElementById("salary").value)
       
    }
    function handelDay(){
        setDay(document.getElementById("day").value)

    }
    function handelMonth(){
        setMonth(document.getElementById("month").value)
    }
    function handelYear(){
        setYear(document.getElementById("year").value)
    }
    function handelNotes(){
        setNotes(document.getElementById("notes").value);
        
    }
    return(
        
        <div class ="container">
            {/* <link rel = "stlyeSheet" href = "EmpStyle.css"/> */}
        <h3>Employee Payroll Form</h3>
        <div >
            <label>Name </label>
        <input id = "name" type = "text" onChange={handelName} />
        </div>
        <br/>
       
        <br/>
        <div class = "div">
        <label>Gender </label>
             <input  type="radio" name="gender" value="male" onChange={handelGender}/>
             <label >Male</label>
             <input  type="radio" name="gender" value="female" onChange={handelGender}/>
             <label >Female</label>
             </div>
             <br/>
         <div class = "div">
        <label>Department </label>
             <input  type="radio" name="department" value="hr" onChange={handelDepartment}/>
             <label >HR</label>
             <input  type="radio" name="department" value="sales"onChange={handelDepartment}/>
             <label >Sales</label>
             <input  type="radio" name="department" value="finance"onChange={handelDepartment}/>
             <label >Finance</label>
             <input  type="radio" name="department" value="engineer"onChange={handelDepartment}/>
             <label >Engineer</label>
             <input  type="radio" name="department" value="others"onChange={handelDepartment}/>
             <label >Others</label>
             </div>
             <br/>
             <div class = "div">
             <label>Salary</label>
             <select id = "salary" onChange={handelSalary} >
             <option value = "select salary" name = " salary"  >Select Salary</option>
             <option value = "200000"name = " salary" >200000</option>
             <option value = "300000" name = " salary" >300000</option>
             </select>
             </div>
             <br/>
             <div class = "div">
             <label>Start Date</label>
            <select id = "day" name = "day" onChange={handelDay} >
             <option value = "day">Day</option>
             <option >1</option>
             <option >2</option>
             <option >3</option>
             <option >4</option>
             <option >5</option>
             <option >6</option>
             <option >7</option>
             <option >8</option>
             <option >9</option>
             <option >10</option>
             <option >11</option>
             <option >12</option>
             <option >13</option>
             <option >14</option>
             <option >15</option>
             <option >16</option>
             <option >17</option>
             <option >18</option>
             <option >19</option>
             <option >20</option>
             <option >21</option>
             <option >22</option>
             <option >23</option>
             <option >24</option>
             <option >25</option>
             <option >26</option>
             <option >27</option>
             <option >28</option>
             <option >29</option>
             <option >30</option>
             <option >31</option>
             </select>
             <select id = "month" name = "month" onChange={handelMonth}>
             <option value = "month">Month</option>
            
             <option value="1">January</option>
             <option value="2">February</option>
             <option value="3">March</option>
             <option value="4">April</option>
             <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
           <option value="8">August</option>
           <option value="9">September</option>
           <option value="10">October</option>
           <option value="11">November</option>
           <option value="12">December</option>
             </select>
             <select id = "year" name = "year" onChange={handelYear} >
             <option value = "year">Year</option>
             <option >2021</option>
             <option >2022</option>
             <option >2023</option>
             </select></div>

             <br/>
             <div class = "div">
             <label>Notes</label>
             <input id = "notes" type ="text" onChange={handelNotes}/></div>

             <br/>
             <div class = "buttons">
             <button >Cancle</button>
             <button onClick = {()=>handleSubmit()} >Submit</button>
             <button >Reset</button>
             </div>



             




        
           
             
        </div>
       


    )
      
}
export default Employee;