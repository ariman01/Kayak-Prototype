import React,{ Component } from 'react';
import HomePageHeader1 from './headers/homepage_header1';
import './../images/user_profile.css';
import UserHistoryTile from './searchbars/userhistory_tiles';
import { connect } from 'react-redux';
import {history} from "../utils/util";
import {bindActionCreators} from 'redux';
import * as UTIL from '../utils/util';
import {userapi} from './../api/userAPI';


class UserHotelHistory extends Component {

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
getUserHistoryTile(userhistory){
  return userhistory.map((history)=>{
    return(
      <tr><td>{history.booking_id}</td>
      <td>{history.hotel_name}</td>
      <td>{history.src_city}</td>
      <td>{history.booking_date}</td>
      <td> ${history.booking_amount}</td>
      </tr>
    );
  })
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
                    <br/>
                    <br></br>
                    <br></br>
                    <a onClick ={() => {this.getCardDetails()}}>Payment Details</a><br/><br/><br/>
                    <a onClick ={() => {this.props.getuserhistorycars({email:UTIL.getUserDetails()});}}>Car History</a><br/><br/><br/>
                    <a onClick ={() => {this.props.getuserhistoryflights({email:UTIL.getUserDetails()});}}>Flight History</a><br/><br/><br/>
                  </div>
                  <div>
                    <p style={{fontSize : "20pt"}}>User Hotel Booking History</p>
                    <br></br>
                    <br></br>
                    <div>
                    <table className="table table-hover table-condensed" style={{width:700}}>
                    <thead>
                        <tr>
                          <th>Booking ID</th>
                          <th>Hotel Name</th>
                          <th>Source City</th>
                          <th>Booking Date</th>
                          <th>Booking Amount</th>
                        </tr>
                    </thead>
                    <tbody>

                    {this.getUserHistoryTile(this.props.userhistory)}
                    </tbody>
                       </table>
                       </div>
                       </div>
              </div>
            </div>
           );
  }
}
function mapStateToProps(state) {
    console.log("state.users.userhistory",state.users.userhotelhistory);
    return{
        userhistory:state.users.userhotelhistory
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getcarddetailsAPI:userapi.getcarddetailsAPI,getuserhistorycars:userapi.getuserhistorycarsAPI,getuserhistoryflights:userapi.getuserhistoryflightsAPI,getuserhistoryhotels:userapi.getuserhistoryhotelsAPI},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(UserHotelHistory);
