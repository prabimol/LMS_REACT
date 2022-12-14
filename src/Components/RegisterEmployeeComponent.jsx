import React from "react";
import axios from "axios";
import ListEmployeesComponent from "./ListEmployeesComponent";

class RegisterEmployeeComponent extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:'',
            mobileno:'',
            emailid:'',
            datejoined:'',
            designation:'',
            department:'',
            manager:'',
            salary:'',
            password:'',
            errors:{}
        }
    }
    changeNameHandler=(event)=>
    {
        this.setState({name: event.target.value})
    }
    changeMobileNoHandler=(event)=>
    {
        this.setState({mobileno: event.target.value})
    }
    changeEmailIdHandler=(event)=>
    {
        this.setState({emailid: event.target.value})
    }
    changeDateJoinedHandler=(event)=>
    {
        this.setState({datejoined: event.target.value})
    }
    changeDesignationHandler=(event)=>
    {
        this.setState({designation: event.target.value})
    }
    changeDepartmentHandler=(event)=>
    {
        this.setState({department: event.target.value})
    }
    changeManagerHandler=(event)=>
    {
        this.setState({manager: event.target.value})
    }
    changeSalaryHandler=(event)=>
    {
        this.setState({salary: event.target.value})
    }
    changePasswordHandler=(event)=>
    {
        this.setState({password: event.target.value})
    }

    formValidation =()=>{
        console.log("Inside validation 1")
        const {name,mobileno,emailid,datejoined,designation,department, manager,salary, password}=this.state;
        let isValid =true;
        const errors ={};
        if(name.length ==0 ){
            errors.nameLen ="Please enter your name**";
            isValid=false;
           
        }
        if(mobileno.length ==0 ){
            errors.noLen ="Mobile number is required**";
            isValid=false;   
        }
        if(emailid.length ==0 ){
            errors.emailLen ="Email ID is required**";
            isValid=false;   
        }
        if(datejoined.length ==0 ){
            errors.dateLen ="Please enter Joined date**";
            isValid=false;   
        }
        if(department.length ==0 ){
            errors.depLen ="Please enter department**";
            isValid=false;   
        }
        if(designation.length ==0 ){
            errors.desLen ="Please enter designation**";
            isValid=false;   
        }
        if(manager.length ==0 ){
            errors.managerLen ="Please enter name of manager**";
            isValid=false;   
        }
        if(salary.length ==0 ){
            errors.salLen ="Please enter salary**";
            isValid=false;   
        }
        if(password.length ==0 ){
            errors.passwordLen ="Please enter password**";
            isValid=false;   
        }
        this.setState({errors});
        console.log(isValid)
        console.log(errors)
        return isValid;

        
    }
    onFormSubmit =(e) =>
    {
         e.preventDefault();
        //******************** */
        const isValid =this.formValidation();
        if(isValid == true){
            this.registerEmployee();
        }
    }

     registerEmployee=async (e)=>
    {
        
        //e.preventDefault();
        const result=await axios.post(
            'http://localhost:28934/api/Employee/Register',
            {
                "employeeId":0,
                "name":this.state.name,
                "mobileNo":this.state.mobileno,
                "emailId":this.state.emailid,
                "dateJoined":this.state.datejoined,
                "designation":this.state.designation,
                "department":this.state.department,
                "managerName":this.state.manager,
                "salary":this.state.salary,
                "password":this.state.password
            }
        );
        window.location='/';

    }

    

    render(){
        return(
            <div className="Auth-form-container">
            <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Employee Registration</h3>
                        <div className="form-group">
                            <label>Name:</label>
                            <input className="form-control" name="name"
                            onChange={this.changeNameHandler}
                            value={this.state.name}/>
                        </div>
                        <div  style={{color:"red"}}>{this.state.errors.nameLen}</div>
                        <div className="form-group">
                            <label>Mobile no:</label>
                            <input className="form-control" name="mobileno"
                            onChange={this.changeMobileNoHandler}
                            value={this.state.mobileno}/>
                        </div>
                        <div  style={{color:"red"}}>{this.state.errors.noLen}</div>
                        <div className="form-group">
                            <label>Email Id:</label>
                            <input className="form-control" name="emailid"
                            onChange={this.changeEmailIdHandler}
                            value={this.state.emailid}/>
                        </div>
                        <div  style={{color:"red"}}>{this.state.errors.emailLen}</div>
                        <div className="form-group">
                            <label>Date joined:</label>
                            <input  className="form-control" name="datejoined" type="date"
                            onChange={this.changeDateJoinedHandler}
                            value={this.state.datejoined}/>
                        </div>
                        <div  style={{color:"red"}}>{this.state.errors.dateLen}</div>
                        <div className="form-group">
                            <label>Designation:</label>
                            <input className="form-control" name="designation"
                            onChange={this.changeDesignationHandler}
                            value={this.state.designation}/>
                        </div>
                        <div  style={{color:"red"}}>{this.state.errors.desLen}</div>
                        <div className="form-group">
                            <label>Department:</label>
                            <input className="form-control" name="department"
                            onChange={this.changeDepartmentHandler}
                            value={this.state.department}/>
                        </div>
                        <div  style={{color:"red"}}>{this.state.errors.depLen}</div>
                        <div className="form-group">
                            <label>Manager:</label>
                            <input className="form-control" name="manager"
                            onChange={this.changeManagerHandler}
                            value={this.state.manager}/>
                        </div>
                        <div  style={{color:"red"}}>{this.state.errors.managerLen}</div>
                        <div className="form-group">
                            <label>Salary:</label>
                            <input className="form-control" name="salary" 
                            onChange={this.changeSalaryHandler}
                            value={this.state.salary}/>
                        </div>
                        <div  style={{color:"red"}}>{this.state.errors.salLen}</div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input className="form-control" name="password" type="password"
                            onChange={this.changePasswordHandler}
                            value={this.state.password}/>
                        </div>
                        <div  style={{color:"red"}}>{this.state.errors.passwordLen}</div><br/>
                        <button className="btn btn-primary" onClick={this.onFormSubmit}>Register</button>
                        
                        </div>
                    </form>
                
            </div>
        )
    }
}
export default RegisterEmployeeComponent;