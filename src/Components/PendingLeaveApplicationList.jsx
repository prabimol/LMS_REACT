import axios from 'axios';
import React from 'react';

export default class PendingLeaveApplicationList extends React.Component

{

    constructor()

    {

        super();

        this.state=

        {

            leaves:[]

        }

    }

    componentDidMount()

    {
        axios.get('http://localhost:28934/api/LeaveDetails/GetPendingLeaveapplications?eid='+localStorage.getItem('user')).then((res) =>{

            this.setState({leaves:res.data});

        })
    }
    ApproveOrDeny(leaveid)
    {
        localStorage.setItem('leaveid',leaveid);
        window.location='/approveordenyleave';
    }
    render()

    {

        return(

        <div className="App">

            <br /><h2 className="text-center Auth-form-title">My Reporting Employees Pending Leave Applications</h2>

            <br />

            <div className="row table-margin" style={{'margin':'30px 30px'}}>

                <table className="table table-striped table-bodered" style={{'backgroundColor':'linen'}}>

                    <thead style={{'backgroundColor':'darkgray'}}>

                        <tr>
                            <th>Employee Id</th>
                            <th>Leave Id</th>
                            <th>Number Of Days</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Leave Type</th>
                            <th>Status</th>
                            <th>Leave Reason</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {

                            this.state.leaves.map(

                                leave =>

                                <tr key={leave.leaveDetailsId}>
                                    <td>{leave.employeeId}</td>
                                    <td>{leave.leaveDetailsId}</td>
                                    <td>{leave.numberOfDays}</td>
                                    <td>{leave.startDate}</td>
                                    <td>{leave.endDate}</td>
                                    <td>{leave.leaveType}</td>
                                    <td>{leave.status}</td>
                                    <td>{leave.leaveReason}</td>
                                    <td><button className='btn btn-primary' onClick={()=>this.ApproveOrDeny(leave.leaveDetailsId)} >Approve/Deny</button></td>
                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    )}

}