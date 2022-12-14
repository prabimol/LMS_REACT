import axios from 'axios';
import React from 'react';

export default class ListOfLeaves extends React.Component

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
        axios.post('http://localhost:28934/api/LeaveDetails/Leavedetailsbyemployee?eid='+localStorage.getItem('user')).then((res) =>{

            this.setState({leaves:res.data});

        })

    }

    newApplication()
    {
        window.location='/applyleave';
    }

    render()

    {

        return(

        <div className="App">

            <br/><h2 className="text-center Auth-form-title">My Leave Applications</h2>

            <br />

            <div className="row table-margin" style={{'margin':'30px 30px'}}>

                <table className='table table-striped table-bordered' style={{'backgroundColor':'linen'}}>

                    <thead style={{'backgroundColor':'darkgray'}}>

                        <tr>

                            <th>Leave Id</th>
                            <th>Number Of Days</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Leave Type</th>
                            <th>Status</th>
                            <th>Leave Reason</th>
                            <th>Applied On</th>
                            <th>Manager Comments</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            this.state.leaves.map(

                                leave =>

                                <tr key={leave.leaveDetailsId}>
                                    <td>{leave.leaveDetailsId}</td>
                                    <td>{leave.numberOfDays}</td>
                                    <td>{leave.startDate}</td>
                                    <td>{leave.endDate}</td>
                                    <td>{leave.leaveType}</td>
                                    <td>{leave.status}</td>
                                    <td>{leave.leaveReason}</td>
                                    <td>{leave.appliedOn}</td>
                                    <td>{leave.managerComments}</td>
                                </tr>

                            )

                        }

                    </tbody>

                </table>
                        <button className='btn btn-primary' onClick={()=>this.newApplication()}>New Application</button>
            </div>

        </div>

    )}

}