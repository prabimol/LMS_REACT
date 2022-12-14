import axios from "axios";
import React from "react";

class ManagerDetails extends React.Component
{
    constructor()
    {
        super();
        this.state={
            employees:{}
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:28934/api/Employee/Managerdetails?id='+localStorage.getItem('user')).then((res)=>{
            this.setState({employees:res.data});
        })
    }
    render()
    {
        return(
            <div>
                <h2 className="text-center">My Manager Details</h2><br/><br/>
                <div className="row" style={{'marginLeft':'500px'}}>
                    <table className="table table-striped table-bodered">
                       
                    <tr>
                                <th>Id</th><td>{this.state.employees.employeeId}</td>
                            </tr>
                            <tr>
                                <th>Name</th><td>{this.state.employees.name}</td>
                            </tr>
                            <tr>
                                <th>Mobile No</th><td>{this.state.employees.mobileNo}</td>
                            </tr>
                            <tr>
                                <th>Email</th><td>{this.state.employees.emailId}</td>
                            </tr>
                            <tr>
                                <th>Date Joined</th><td>{this.state.employees.dateJoined}</td>
                            </tr>
                            <tr>
                                <th>Department</th><td>{this.state.employees.department}</td>
                            </tr>
                            <tr>
                                <th>Designation</th> <td>{this.state.employees.designation}</td>
                            </tr>
                            <tr>
                                <th>Manager</th><td>{this.state.employees.managerName}</td>
                            </tr>
                            {/* <tr>
                                 <th>Salary</th><td>{this.state.employees.salary}</td>
                            </tr> */}
                       
                        
                    </table>
                </div>
            </div>
        )
    }

}

export default ManagerDetails;