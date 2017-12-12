import React,{ Component } from 'react';
import './../../images/hotel.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {billingUserinfoUpdate} from '../../actions/user_action';
import { useraction } from './../../actions/user_action';

class GuestDetails extends Component {
  constructor() {
      super();
  }
  handlebillingData(type, data1){
    console.log("its handlebilling data in billing_info");
    let data = Object.assign({},this.props.usercarddetails);
    data[type] = data1;
    //console.log("handlebillingData:",data);
    this.props.billingUserinfoUpdate(data);

  }

  render() {
    console.log("GuestDetailsthis.props.usercarddetails.email",this.props.usercarddetails.email);
    return (
              <div className = "guest-details">

                  <strong>Guest 1 details :</strong> (must be an adult)
                  <br></br>
                  <br></br>
                  <div className="guest-details1">
                        <div className="guest-details-div1">
                            <input type="text" placeholder="First Name" id="first_name" defaulValue={this.props.usercarddetails.first_name} style={{width:350 , height : 35}}
                            onChange={(first_name) => {this.handlebillingData("first_name",first_name.target.value)}}/>
                            <br></br>
                            <br></br>
                            <input type="text" placeholder="Email" value={this.props.usercarddetails.email} required="true"
                                   onChange={(eventdata)=>{this.handlebillingData("email",eventdata.target.value)}}
                                   style={{width:350 , height : 35}}/>
                        </div>
                        <div className="guest-details-div2">
                            <input type="text" placeholder="Last Name" defaulValue={this.props.usercarddetails.last_name} style={{width:350 , height : 35}}/>
                            <br></br>
                            <br></br>
                            <input type="text" placeholder="Phone Number" value={this.props.usercarddetails.phone} style={{width:350 , height : 35}}
                            onChange={(phone) => {this.handlebillingData("phone",phone.target.value)}}/>
                        </div>
                    </div>
                    <hr/>
              </div>
            );
  }
}
function mapStateToProps(state) {
    console.log(" userdetails in hotel guest",state.users.userdetails);
    return  {
      usercarddetails: state.users.usercarddetails,
      currentUser:state.users.currentUser
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({setUser_action:useraction.setUser_action,billingUserinfoUpdate:billingUserinfoUpdate},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(GuestDetails);
