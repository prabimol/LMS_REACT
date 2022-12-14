import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import ListEmployeesComponent from './Components/ListEmployeesComponent';
import LoginEmployeeComponent from './Components/LoginEmployeeComponent';
import RegisterEmployeeComponent from './Components/RegisterEmployeeComponent';
import EmployeeDashboard from './Components/EmployeeDashboard';
import EmployeeDetails from './Components/EmployeeDetails';
import ApplyForLeave from './Components/ApplyForLeave';
import ListOfLeaves from './Components/ListOfLeaves';
import ManagerDetails from './Components/ManagerDetails';
import PendingLeaveApplicationList from './Components/PendingLeaveApplicationList';
import Approveordenyleave from './Components/ApproveOrDenyLeave';
import Navbar from './Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      {/* <ul>
        <li><Link to='/'>Employeelist</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/applyleave'>ApplyLeave</Link></li>
        <li><Link to='/leaveslist'>LeaveList</Link></li>
        <li><Link to='/dashboard'>EmployeeDashboard</Link></li>
        <li><Link to='/mydetails'>MyDetails</Link></li>
        <li><Link to='/mymanagerdetails'>MyManagerDetails</Link></li>
      </ul> */}

      <Routes>
        <Route path='/' element={<ListEmployeesComponent/>}></Route>
        <Route path='/login' element={<LoginEmployeeComponent/> }></Route>
        <Route path='/register' element={<RegisterEmployeeComponent/>}></Route>
        <Route path='/applyleave' element={<ApplyForLeave />}></Route>
        <Route path='/leaveslist' element={<ListOfLeaves />}></Route>
        <Route path='/dashboard' element={<EmployeeDashboard />}></Route>
        <Route path='/mydetails' element={<EmployeeDetails />}></Route>
        <Route path='/mymanagerdetails' element={<ManagerDetails />}></Route>
        <Route path='/pendingleaveapplications' element={<PendingLeaveApplicationList />}></Route>
        <Route path='/approveordenyleave' element={<Approveordenyleave />}></Route>
      </Routes>

      
      {/* <LoginEmployeeComponent/>
      <RegisterEmployeeComponent/> */}
    </div>
  );
}

export default App;
