import React,{ Component } from 'react';
import AdminLoginHeader from './headers/admin_login_header';
import './../images/user_profile.css';
import {bindActionCreators} from 'redux';
import {adminLogin} from "../api/adminAPI";
import { connect } from 'react-redux';

class AdminLogin extends Component {
  constructor(){
    super();
    this.adminDetail ={};
  }

  render() {

    return (
            <div>
              <div className="user-profile-header">
                <AdminLoginHeader/>
              </div>

              <div className="admin-login">
              <label>Username</label>
              <input type="text" style={{width:400}} className="form-control" id="username"  placeholder="Enter username" size="35"
              onChange={(admininput)=>{
                this.adminDetail.username = admininput.target.value;
              }}/>
              <br></br>
              <label>Password</label>
              <input type="password" style={{width:400}} className="form-control" id="password"  placeholder="Enter password" size="35"
              onChange={(admininput)=>{
                this.adminDetail.password = admininput.target.value;
              }}/>
              <br></br>

              <button type="submit" className="btn btn-primary" style={{width:150}}
              onClick ={()=> this.props.adminLogin(this.adminDetail)}>Login</button>
              </div>


            </div>
           );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({adminLogin:adminLogin},dispatch);
}

export default connect(null,mapDispatchToProps)(AdminLogin);
