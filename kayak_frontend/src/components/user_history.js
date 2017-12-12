import React,{ Component } from 'react';
import HomePageHeader1 from './headers/homepage_header1';
import './../images/user_profile.css';
import UserHistoryTile from './searchbars/userhistory_tiles';
import { connect } from 'react-redux';
import {history} from "../utils/util";
import {bindActionCreators} from 'redux';
import * as UTIL from '../utils/util';
import {userapi} from './../api/userAPI';


class UserHistory extends Component {

  constructor(){
  super();
}
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
                    <a onClick ={() => {history.push('/userdetails')}}>Preference</a>
                    <br></br>
                    <br></br>
                    <a onClick ={() => {this.getCardDetails()}}>Payment Details</a>
                  </div>
                  <br/>
                  <br/>

                  <p style={{fontSize : "20pt"}}>User History</p>
                  <a onClick ={() => {this.props.getuserhistorycars({email:UTIL.getUserDetails()});}}>Car History</a><br/><br/><br/>
                  <a onClick ={() => {this.props.getuserhistoryflights({email:UTIL.getUserDetails()});}}>Flight History</a><br/><br/><br/>
                  <a onClick ={() => {this.props.getuserhistoryhotels({email:UTIL.getUserDetails()});}}>Hotel History</a><br/><br/><br/>


              </div>
            </div>
           );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getcarddetailsAPI:userapi.getcarddetailsAPI,getuserhistorycars:userapi.getuserhistorycarsAPI,getuserhistoryflights:userapi.getuserhistoryflightsAPI,getuserhistoryhotels:userapi.getuserhistoryhotelsAPI},dispatch);
}
export default connect(null,mapDispatchToProps)(UserHistory);
