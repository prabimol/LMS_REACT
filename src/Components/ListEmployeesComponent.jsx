import axios from "axios";
import React from "react";

class ListEmployeesComponent extends React.Component
{
    constructor()
    {
        super();
        this.state={
            employees:[]
        }
    }

    Login (eid){
        localStorage.setItem('loginId',eid);
        window.location ='/login';
    }

    componentDidMount()
    {
        axios.get('http://localhost:28934/api/Employee').then((res)=>{
            this.setState({employees:res.data});
        })
    }
    render()
    {
        return(
            <div >
                <br/><h1 className="text-center Auth-form-title">List of Employees</h1>
                <div className="row table-margin" style={{'margin':'30px 30px'}}>
                    <table className="table table-striped table-bodered" style={{'backgroundColor':'linen'}}>
                        <thead style={{'backgroundColor':'darkgray'}}>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Designation</th>
                                <th>Department</th>
                                <th>Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    emp=>
                                    <tr key={emp.employeeId}>
                                        <td>{emp.employeeId}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.emailId}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.department}</td>
                                        <td>
                                        <button style={{'backgroundColor':'darkgray'}} className="btn btn-primary" onClick={()=>this.Login(emp.employeeId)} >Login</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListEmployeesComponent;