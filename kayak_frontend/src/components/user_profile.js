import React,{ Component } from 'react';
import HomePageHeader1 from './headers/homepage_header1';
import './../images/user_profile.css';
import {history} from "../utils/util";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {userapi} from './../api/userAPI';
import * as UTIL from '../utils/util';
class UserProfile extends Component {
  getCardDetails()
  {
    console.log("its getCardDetails in user_profile");
    var email= UTIL.getUserDetails();
    if(email){
      this.props.getcarddetailsAPI({email:email});
    }else{
      alert("User not logged in !!!");

    }
  }
handleEdit(){
    history.push('./edituserdetails');
  }


  render() {
    console.log("It will display user profile");

    return (

            <div>

              <div className="user-profile-header">
                <HomePageHeader1/>
              </div>

              <div className= "user-profile-body">
                  <div className= "user-profile-body-nav-options">
                    <br></br>
                    <a onClick ={() => {this.getCardDetails()}}>Payment Details</a>
                    <br></br>
                    <br></br>
                    <a onClick ={() => {this.props.getuserhistorycars({email:UTIL.getUserDetails()});}}>Car History</a><br/><br/><br/>
                    <a onClick ={() => {this.props.getuserhistoryflights({email:UTIL.getUserDetails()});}}>Flight History</a><br/><br/><br/>
                    <a onClick ={() => {this.props.getuserhistoryhotels({email:UTIL.getUserDetails()});}}>Hotel History</a><br/><br/><br/>
                  </div>

                  <div className= "user-profile-body-details">
                    <p style={{fontSize : "20pt"}}>Preferences</p>
                    <table className="table">
                        <tbody>
                          <tr>
                            <td><strong>First Name</strong></td>
                            <td>{this.props.userdetails.first_name}</td>
                          </tr>
                          <tr>
                            <td><strong>Last Name</strong></td>
                            <td>{this.props.userdetails.last_name}</td>
                          </tr>
                          <tr>
                            <td><strong>Email</strong></td>
                            <td>{this.props.userdetails.email}</td>
                          </tr>
                          <tr>
                            <td><strong>Address</strong></td>
                            <td>{this.props.userdetails.address}</td>
                          </tr>
                          <tr>
                            <td><strong>City</strong></td>
                            <td>{this.props.userdetails.city}</td>
                          </tr>
                          <tr>
                            <td><strong>State</strong></td>
                            <td>{this.props.userdetails.state}</td>
                          </tr>
                          <tr>
                            <td><strong>Zip</strong></td>
                            <td>{this.props.userdetails.zip}</td>
                          </tr>
                          <tr>
                            <td><strong>Phone</strong></td>
                            <td>{this.props.userdetails.phone}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div style = {{width : "100%", marginLeft: 160}}>
                      <button onClick ={() => this.handleEdit()} style={{align:'center', width:"15%",marginTop:"2%"}}><strong>Edit</strong></button>

                      </div>
                      <a href={'./deleteaccount'} style={{float:'left'}}>Delete Account</a>
                  </div>
              </div>



            </div>
          );
  }
}


function mapStateToProps(state) {
    console.log("state.users.userdetails",state.users.userdetails);
   return{
       userdetails:state.users.userdetails
   }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getcarddetailsAPI:userapi.getcarddetailsAPI,getuserhistorycars:userapi.getuserhistorycarsAPI,getuserhistoryflights:userapi.getuserhistoryflightsAPI,getuserhistoryhotels:userapi.getuserhistoryhotelsAPI},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);
