import React from "react";
import {Routes,Route,Link} from 'react-router-dom';

class EmployeeDashboard extends React.Component
{
    constructor()
    {
        super();
    }
    // Logout()
    // {
    //     localStorage.clear();
    //     window.location="/";
    // }
    render(){
        return(
            <div className="App">
                <h1>Employee Dashboard</h1>
                <h2>Welcome, {localStorage.getItem('name')}</h2><br/><br/>
                <ul>
                {/* <li><Link to='/applyleave'>ApplyLeave</Link></li> */}
                <li><Link to='/leaveslist'>My Leave Applications</Link></li>
                <li><Link to='/mydetails'>My Details</Link></li>
                <li><Link to='/mymanagerdetails'>My ManagerDetails</Link></li>
                <li><Link to='/pendingleaveapplications'>MyReportingEmployeesPendingLeaveApplications</Link></li><br/>
                {/* <li><button className='btn btn-danger' onClick={()=>this.Logout()}>Logout</button></li> */}
                </ul>
                
            </div>
            
        )
    }
}

export default EmployeeDashboard;