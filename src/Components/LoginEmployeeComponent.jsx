import React from "react";
import axios from "axios";

class LoginEmployeeComponent extends React.Component
{
    constructor()
    {
        
        super();
        this.state={
            EmployeeId:localStorage.getItem('loginId'),
            Password:'',
            errors:{}//empty obj
        }
    }
    changeEmployeeIdHandler=(event)=>
    {
        this.setState({EmployeeId: event.target.value})
    }
    changePasswordHandler=(event)=>
    {
        this.setState({Password: event.target.value})
    }

    formValidation =()=>{
        //console.log("Inside validation 1")
        const {EmployeeId,Password}=this.state;
        let isValid =true;
        const errors ={};
        if(this.state.EmployeeId.length ==0 ){
            errors.employeeIdLength ="Please enter your Employee Id**";
            isValid=false;
            console.log("Inside validation 2")
        }

        if(this.state.Password.trim().length ==0 ){
            errors.employeePassword ="Please enter your Password**";
            isValid=false;
            console.log("Inside validation 3")
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
            this.Login();
        }
    }

    Login=(e)=>
    {
       // e.preventDefault();
        const result=axios.post('http://localhost:28934/api/Employee/Login',
            {
                "Id":0,
                "EmployeeId":this.state.EmployeeId,
                "Password":this.state.Password
            }
        )
        .then((result) => {   
            if (result.data.status === 'Invalid')  
                alert(result.data.message);  
            else  
                {
                    localStorage.setItem('user',this.state.EmployeeId);
                    localStorage.setItem('name',result.data.message);
                    window.location='/dashboard';
                }
        }) 
    }

    render(){
        return(
            <div className="Auth-form-container">
                    <form className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>
                        <div className="form-group mt-3">
                            <label>Employee Id:</label>
                            <input type="number" className="form-control mt-1" name="employeeid" 
                            placeholder="Enter employee ID"
                            defaultValue={this.state.EmployeeId}
                            onChange={this.changeEmployeeIdHandler}
                            value={this.state.EmployeeId}/>
                        </div>
                        <div style={{color:"red"}}>{this.state.errors.employeeIdLength}</div>
                        <div className="form-group mt-3">
                            <label>Password:</label>
                            <input className="form-control mt-1" name="password" type='password'
                            onChange={this.changePasswordHandler}
                            value={this.state.Password}/>
                        </div>
                        <div style={{color:"red"}}>{this.state.errors.employeePassword}</div>
                        <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary" onClick={this.onFormSubmit}>Login</button>
                        <center><p>Not registered yet?<a style={{color:"blue"}} className='nav-link active' href='/register'>Register now</a></p></center>
                        </div>
                        </div>
                    </form>
                
            </div>
        )
    }
}

export default LoginEmployeeComponent;