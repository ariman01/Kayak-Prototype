import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { useraction } from './../../actions/user_action';
import {edituserdetailsAPI} from './../../api/userAPI';
import HomePageHeader1 from './../headers/homepage_header1';
import * as UTIL from './../../utils/validation';

class EditPreferenceForm extends Component {
  constructor() {
      super();
      this.user_edit_data = {};
  }


  checkpersonalInfoValid(data){
      console.log("User preference edit checkpersonalInfoValid: ",data);
      if(data.first_name && !UTIL.validateName(data.first_name))
          return false
      if(data.last_name && !UTIL.validateName(data.last_name))
          return false
      if(data.state && !UTIL.checkValidState(data.state))
          return false
      if(data.zip && !UTIL.validatePinCode(data.zip))
          return false
      if(data.city && !UTIL.checkValidCity(data.city))
          return false
      if(data.phone && !UTIL.validatePhone(data.phone))
          return false
      return true;
  }

  handleSubmit(data){
    if(UTIL.validateEmail(data.email) && this.checkpersonalInfoValid(data)){
        this.props.edituserdetailsAPI(data);
    }

  }
  render() {
    this.user_edit_data = this.props.userdetails;
    return (

            <div className = "add-hotel-admin">

                <div className="show-hotel-header">
                    <HomePageHeader1/>
                </div>

                <div className = "add-hotel-admin-body">
                  <h2>Edit Preference</h2>
                  <hr/>


                  <label>First name</label>
                  <input type="text" style={{width:400}} className="form-control"  defaultValue={this.props.userdetails.first_name} size="35"
                         onChange={(first_name) => {this.user_edit_data.first_name = first_name.target.value}}/>
                  <br></br>
                  <label>Last name</label>
                  <input type="text" style={{width:400}} className="form-control"  defaultValue={this.props.userdetails.last_name} size="35"
                         onChange={(last_name) => {this.user_edit_data.last_name = last_name.target.value}}/>
                  <br></br>
                  <label>Email</label>
                  <input type="text" style={{width:400}} className="form-control"  defaultValue={this.props.userdetails.email} size="35"
                         onChange={(email) => {this.user_edit_data.email = email.target.value}}/>
                  <br></br>
                  <label>Address</label>
                  <input type="text" style={{width:400}} className="form-control"  defaultValue={this.props.userdetails.address} size="35"
                         onChange={(address) => {this.user_edit_data.address = address.target.value}}/>
                  <br></br>
                  <label>City</label>
                  <input type="text" style={{width:400}} className="form-control"  defaultValue={this.props.userdetails.city} size="35"
                         onChange={(city) => {this.user_edit_data.city = city.target.value}}/>
                  <br></br>

                  <label>State</label>
                  <input type="text" style={{width:400}} className="form-control"  defaultValue={this.props.userdetails.state} size="35"
                         onChange={(state) => {this.user_edit_data.state = state.target.value}}/>

                  <br></br>
                  <label>Zip</label>
                  <input type="text" style={{width:400}} className="form-control"  defaultValue={this.props.userdetails.zip} size="35"
                         onChange={(zip) => {this.user_edit_data.zip = zip.target.value}}/>

                  <br></br>
                  <label>Phone Number</label>
                  <input type="text" style={{width:400}} className="form-control"  defaultValue={this.props.userdetails.phone} size="35"
                         onChange={(phone) => {this.user_edit_data.phone = phone.target.value}}/>

                  <br></br>

                  <button onClick ={() => this.handleSubmit(this.user_edit_data)} type="submit" className="btn btn-primary" style={{width:150}}>Submit</button>

                </div>


            </div>
           );
  }
}
function mapStateToProps(state) {
    console.log("edit preference pageuserdetails",state.users.userdetails);
    return  {
        userdetails: state.users.userdetails
    }
}

function mapDispatchToProps(dispatch) {
    console.log("its before action in editpref"+this.user_edit_data);
    return bindActionCreators({edituserdetailsAPI:edituserdetailsAPI},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(EditPreferenceForm);
