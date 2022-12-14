import React, { Component } from 'react' 
import {Link} from 'react-router-dom';
// import Login from './Login';

export default class Logout extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.Logout = this.Logout.bind(this)
    }

    Logout()
    {
            window.location="/";
         
    }
    
  render() {
    return (
      <div>
        
        <button onClick={this.Logout}>Logout</button>
      </div>
    )
  }
}