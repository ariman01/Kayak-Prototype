import React,{ Component } from 'react';
import HomePageHeader from './../headers/homepage_header';
import './../../images/user_profile.css';


class UserHistoryTile extends Component {


  render() {
    console.log("It will display user profile");
    return (
            <div>
                            <td>{this.props.data.booking_id}</td>
                            <td>{this.props.data.property_name}</td>
                            <td>{this.props.data.booking_date}</td>
                            <td> ${this.props.data.booking_amount}</td>
                          <br></br>
                          <br></br>
            </div>
           );
  }
}



export default UserHistoryTile;
