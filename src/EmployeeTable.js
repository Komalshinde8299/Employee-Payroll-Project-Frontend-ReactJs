import React, { Component } from 'react'
import Employee from './Employee'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

export default class EmployeeTable extends Component {
    constructor(){
    super()
    this.state = {
        user: [{id:" ", name:" ", gender:" ", department :" ", salary:" ",startDate:" " } ],
        search: " ",
        user1 : [{id:" ",name:" ", gender:" ", department :" ", salary:" ",startDate:" " } ],
    };
    
}
getUser= async () =>{
   
    axios.get('http://localhost:8082/employee/getAll').then((response) =>{
        console.log("check details in consol"+response.data.obj)
        this.setState({user: response.data.obj})
        this.setState({user1 : response.data.obj})
    }  ).catch((error)=> console.log(error))

    
}
componentDidMount(){
    this.getUser();
}
// componentDidUpdate(){
//     this.state.user1;
// }
handelSearch(search){
    const result = this.state.user.filter((e)=> {return(e.title.toLowerCase().match(search.toLowerCase()))})
    this.setState({user1: result})
}
// handelDelete(id){
//     const deleteId = this.state.user. filter((e)=>{return(e.id !== id )})
//     this.setState({user1: deleteId})

// }
handelDelete(id) {
    
  axios
  .delete(`http://localhost:8082/employee/delete/${id}`)
  .then((response) => {
    alert("delete successful");
    console.log("check delete " + response.data.obj);
    // Handle success
  })
  .catch((error) => {
    if (error.response) {
      // The request was made, but the server responded with an error status
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No Response from Server');
    } else {
      // Something happened in setting up the request
      console.error('Request Error:', error.message);
    }
  });
}


  handleUpdate(id) {
    const updatedEmployeeData = {
      name: 'New Name',
      gender: 'New Gender',
      department: 'New Department',
      salary: 'New Salary',
      startDate: 'New Start Date',
    };
  
    axios
      .put(`http://localhost:8082/employee/update?id=${id}`, updatedEmployeeData)
      .then((response) => {
        console.log(`Employee with ID ${id} updated successfully.`);
  
        const updatedUser1 = this.state.user1.map((employee) => {
          if (employee.id === id) {
            return response.data.obj;
          } else {
            return employee;
          }
        });
  
        this.setState({ user1: updatedUser1 });
      })
      .catch((error) => {
        console.error(`Error updating employee with ID ${id}:`, error);
      });
  }
  
  
    //  this.state ={data: JSON.parse (localStorage.getItem("employee")) }
    // console.log(localStorage.getItem("employee"));
    // console.log(this.state.data);
    // // let arr = JSON.parse (localStorage.getItem("employee")) 
    
    // // console.log(arr)

    
   
   
   coloums = [
    {
      name : "id",
      selector : (row)=> row.id,
       
  },
    {
        name : "name",
        selector : (row)=> row.name,
         
    },
    {
        name : "gender",
        selector : (row)=> row.gender,
         
    },
    {
        name : "department",
        selector : (row)=> row.department,
         
    },
    {
        name : "salary",
        selector : (row)=> row.salary,
         
    },
    {
        name : "startDate",
        selector : (row)=> row.startDate,
         
    },
    // {
    //     name : "Date",
    //     selector : (row)=> row.date,
         
    // },
    // {
    //     name : "Note",
    //     selector : (row)=> row.notes,
         
    // }
    {
        name:"Action",
        cell:(row)=>
        <>
        <button onClick={() =>this.handelDelete(row.id)}>Delete</button>
        <button onClick={() => this.handleUpdate(row.id)}>Edit</button>

         </>

    }

  ]
  
    
    
  render() {
    return (
      <>
       <Link to={'/home'}>Add User
       </Link>
        <DataTable columns={this.coloums} data={this.state.user1} 
        pagination 
     
        actions = {<input placeholder='Search' onChange={
            (event)=>
        {this.setState({search:event.target.value})
        this.handelSearch(this.state.search)
        }}></input>}
        >
           </DataTable>
          
          
        </>
    )
  }
}
