import React from 'react';
import axios from 'axios';
export default class ApplyForLeave extends React.Component
{
    constructor(){
        super();
        this.state ={
            startDate:'',
            endDate:'',
            numberOfDays:'',
            leaveType:'',
            leaveReason:'',
            errors:{},
            currentDate:new Date()
        }
    }
    changeStartDateHandler =(e)=>
    {
        this.setState({startDate:e.target.value})
    }
    changeEndDateHandler =(e)=>
    {
        this.setState({endDate:e.target.value})
    }
    changeNumberOfDaysHandler =(e)=>
    {
        this.setState({numberOfDays:e.target.value})
    }
    changeLeaveTypeHandler =(e)=>
    {
        this.setState({leaveType:e.target.value})
    }
    changeLeaveReasonHandler =(e)=>
    {
        this.setState({leaveReason:e.target.value})
    }

    formValidation =() =>{
        console.log('inside formvalidation');
        const {startDate,endDate,numberOfDays,leaveType,leaveReason}=this.state;
        let isValid =true;
        const errors ={};



        //let checkDate =this.state.currentDate >new Date(this.state.startDate);

            // const errors ={};

            if(startDate.length == 0){

               

                console.log(this.state.currentDate)

                // const sdate =e.target.value;

                errors.StartDateLength ="Start Date is required**";

                isValid=false;

            }

            if(this.state.currentDate >new Date(this.state.startDate) ){

                console.log(this.state.currentDate)

                errors.StartDatePast ="Start date cannot be past";

                isValid=false;

            }

            if(endDate.length == 0){
                console.log(this.state.currentDate)
                console.log(this.state.startDate)
                console.log(new Date(this.state.startDate))
                console.log(this.state.currentDate >startDate);

                errors.endDateLength ="Please select end date**";

                isValid=false;

            }
            if(endDate<=startDate){

                errors.EndDatePast ="End date should be greater than or equal start date";

                isValid=false;

            }

        if(startDate.length == 0){
            errors.StartDateLength ="Please select start date**";
            isValid=false;
        }
        if(endDate.length == 0){
            errors.endDateLength ="Please select end date**";
            isValid=false;
        }
        if(endDate.length == 0){
            errors.numberOfDaysLength ="Please enter number of days**";
            isValid=false;
        }
        if(leaveType.trim().length == 0){
            errors.leaveTypeLength ="Please enter leave type**";
            isValid=false;
        }
        if(leaveReason.trim().length == 0){
            errors.leaveReasonLength="Please enter leave reason**";
            isValid=false;
        }
        this.setState({errors});
        console.log(isValid)
    console.log(errors)
        return isValid;

    }
    //validation
    onFormSubmit =(e) =>{
        e.preventDefault();
        const isValid =this.formValidation();
        if(isValid ==true){
            this.saveLeaves();
        }

    }

    saveLeaves = (e) =>
    {
        //e.preventDefault();
        //console.log("SaveLeaves called");
        //console.log(this.state.startDate,this.state.endDate,this.state.numberOfDays,this.state.leaveType,this.state.leaveReason);
        const overlap=axios.get('http://localhost:28934/api/LeaveDetails/overlappingDates?startDate='+this.state.startDate+'&endDate='+this.state.endDate)
        .then(overlap=>
            {
                if(overlap.data.status ==='Success'){
            
        axios.post('http://localhost:28934/api/LeaveDetails',
        {
            "LeaveDetailsId":0,
            "StartDate":this.state.startDate,
            "EndDate":this.state.endDate,
            "NumberOfDays":this.state.numberOfDays,
            "LeaveType":this.state.leaveType,
            "Status":"Pending",
            "LeaveReason":this.state.leaveReason,
            "EmployeeId":localStorage.getItem('user'),
            "AppliedOn":new Date().getDate()+"-"+new Date().getMonth().toString()+"-"+new Date().getFullYear().toString(),
            "ManagerComments":"Yet to be updated!"
        });
    }
    else{
        alert("Cannot apply for existing leave date");
    }});
        window.location='/leaveslist';
    }
    render()
    {
        return(
            <div className="Auth-form-container">
            <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Apply Leave</h3>
                    <div className='form-group mt-3'>
                        <label>Start Date:</label>
                        <input type='date' className='form-control mt-1' name='startDate'
                        onChange={this.changeStartDateHandler}
                        value={this.state.startDate}/>
                    </div>
                    <div style={{color:"red"}}>{this.state.errors.StartDateLength}</div><br/>
                    <div style={{color:"red"}}>{this.state.errors.StartDatePast}</div><br/>
                    <div className='form-group mt-3'>
                        <label>End Date:</label>
                        <input type='date' className='form-control mt-1' name='endDate'
                        onChange={this.changeEndDateHandler}
                        value={this.state.endDate}/>
                    </div>
                    <div style={{color:"red"}}>{this.state.errors.endDateLength}</div><br/>
                    <div className='form-group mt-3'>
                        <label>Number Of Days:</label>
                        <input className='form-control mt-1' name='numberOfDays'
                        onChange={this.changeNumberOfDaysHandler}
                        value={this.state.numberOfDays}/>
                    </div>
                    <div style={{color:"red"}}>{this.state.errors.numberOfDaysLength}</div><br/>
                    <div className='form-group mt-3'>
                        <label>Leave Type:</label>
                        <input type='text'  className='form-control mt-1' name='leaveType'
                        onChange={this.changeLeaveTypeHandler}
                        value={this.state.leaveType}/>
                    </div>
                    <div style={{color:"red"}}>{this.state.errors.leaveTypeLength}</div><br/>
                    <div className='form-group mt-3'>
                        <label>Leave Reason:</label>
                        <input type='textarea' className='form-control mt-1' name='leaveReason'
                        onChange={this.changeLeaveReasonHandler}
                        value={this.state.leaveReason}/>
                    </div>
                    <div style={{color:"red"}}>{this.state.errors.leaveReasonLength}</div><br/>
                    <button className='btn btn-primary' onClick={this.onFormSubmit}>Apply</button>
                    
                    </div>
                    </form>
                
            </div>
    )}
}


