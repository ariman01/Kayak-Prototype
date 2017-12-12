import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './../../images/admin.css';
import {addUserAdmin} from './../../api/adminAPI';
import * as UTILValidation from './../../utils/validation';


class AddUserAdmin extends Component {
  constructor(){
    super();
    this.userdetail ={}
  }

  handleSubmit(userdetail){
    console.log("Validating add user inputs at admin dashboard");
    if(UTILValidation.emptyDate(userdetail.email,"email") &&
       UTILValidation.validateEmail(userdetail.email,"email") &&
       UTILValidation.emptyDate(userdetail.password,"password") &&
       UTILValidation.emptyDate(userdetail.first_name,"first name") &&
       UTILValidation.emptyDate(userdetail.last_name,"last name") &&
       UTILValidation.emptyDate(userdetail.address,"address") &&
       UTILValidation.emptyDate(userdetail.city,"city") &&
       UTILValidation.checkValidCity(userdetail.city) &&
       UTILValidation.emptyDate(userdetail.state,"state") &&
       UTILValidation.checkValidState(userdetail.state) &&
       UTILValidation.emptyDate(userdetail.zip,"zip") &&
       UTILValidation.validatePinCode(userdetail.zip,"zip")&&
       UTILValidation.emptyDate(userdetail.phone,"phone") &&
       UTILValidation.validatePhone(userdetail.phone,"phone")
       ){

       this.props.addUserAdmin(userdetail);
    }

  }


  render() {
    return (
            <div className = "add-car-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-car-admin-body">
                  <h2>Add New User</h2>
                  <hr/>

                  <label>Email id</label>
                  <input type="text" style={{width:400}} className="form-control" id="email"  placeholder="Enter email id" size="35"
                  onChange={(email) => {this.userdetail.email = email.target.value}}/>
                  <br></br>
                  <label>Password</label>
                  <input type="password" style={{width:400}} className="form-control" id="password"  placeholder="Enter Password" size="35"
                  onChange={(password) => {this.userdetail.password = password.target.value}}/>
                  <br></br>
                  <label>First Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="first_name"  placeholder="Enter first name" size="35"
                  onChange={(first_name) => {this.userdetail.first_name = first_name.target.value}}/>
                  <br></br>
                  <label>Last Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="last_name"  placeholder="Enter the last name" size="35"
                  onChange={(last_name) => {this.userdetail.last_name = last_name.target.value}}/>
                  <br></br>
                  <label>Address</label>
                  <input type="text" style={{width:400}} className="form-control" id="address"  placeholder="Enter address" size="35"
                  onChange={(address) => {this.userdetail.address = address.target.value}}/>
                  <br></br>
                  <label>City</label>
                  <input type="text" style={{width:400}} className="form-control" id="city"  placeholder="Enter city" size="35"
                  onChange={(city) => {this.userdetail.city = city.target.value}}/>
                  <br></br>
                  <label>State</label>
                  <input type="text" style={{width:400}} className="form-control" id="state"  placeholder="Enter state" size="35"
                  onChange={(state) => {this.userdetail.state = state.target.value}}/>
                  <br></br>
                  <label>Enter zip</label>
                  <input type="text" style={{width:400}} className="form-control" id="zip"  placeholder="Enter zip" size="35"
                  onChange={(zip) => {this.userdetail.zip = zip.target.value}}/>
                  <br></br>
                  <label>Enter Phone</label>
                  <input type="text" style={{width:400}} className="form-control" id="phone"  placeholder="Enter phone" size="35"
                  onChange={(phone) => {this.userdetail.phone = phone.target.value}}/>
                  <br></br>

                  <button type="submit" className="btn btn-primary" style={{width:150}}
                  onClick={() => this.handleSubmit(this.userdetail)}>Add User</button>

                </div>

            </div>
           );
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUserAdmin:addUserAdmin},dispatch);
}

export default connect(null,mapDispatchToProps)(AddUserAdmin);
