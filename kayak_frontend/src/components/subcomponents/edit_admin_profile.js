import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './../../images/admin.css';
import {handleAdminUpdate} from './../../api/adminAPI';


class EditAdminProfile extends Component {
  constructor(){
    super();
    this.updatedadmindetail ={}
  }


  render() {
    this.updatedadmindetail = this.props.edit_admin_details[0];
    return (
            <div className = "add-car-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-car-admin-body">
                  <h2>Edit Admin details</h2>
                  <hr/>

                  <label>First Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="first_name"  defaultValue={this.updatedadmindetail.first_name}  size="35"
                  onChange={(first_name) => {this.updatedadmindetail.first_name = first_name.target.value}}/>
                  <br></br>
                  <label>Last Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="last_name"  defaultValue={this.updatedadmindetail.last_name}  size="35"
                  onChange={(last_name) => {this.updatedadmindetail.last_name = last_name.target.value}}/>
                  <br></br>
                  <label>Address</label>
                  <input type="text" style={{width:400}} className="form-control" id="address"  defaultValue={this.updatedadmindetail.address}  size="35"
                  onChange={(address) => {this.updatedadmindetail.address = address.target.value}}/>
                  <br></br>
                  <label>City</label>
                  <input type="text" style={{width:400}} className="form-control" id="city"  defaultValue={this.updatedadmindetail.city}  size="35"
                  onChange={(city) => {this.updatedadmindetail.city = city.target.value}}/>
                  <br></br>
                  <label>State</label>
                  <input type="text" style={{width:400}} className="form-control" id="state"  defaultValue={this.updatedadmindetail.state}  size="35"
                  onChange={(state) => {this.updatedadmindetail.state = state.target.value}}/>
                  <br></br>
                  <label>Enter zip</label>
                  <input type="text" style={{width:400}} className="form-control" id="zip"  defaultValue={this.updatedadmindetail.zip}  size="35"
                  onChange={(zip) => {this.updatedadmindetail.zip = zip.target.value}}/>
                  <br></br>
                  <label>Enter Phone</label>
                  <input type="text" style={{width:400}} className="form-control" id="phone"  defaultValue={this.updatedadmindetail.phone}  size="35"
                  onChange={(phone) => {this.updatedadmindetail.phone = phone.target.value}}/>
                  <br></br>

                  <button type="submit" className="btn btn-primary" style={{width:150}}
                  onClick={() => this.props.handleAdminUpdate(this.updatedadmindetail)}>Update Admin</button>

                </div>

            </div>
           );
  }
}


function mapStateToProps(state){
  console.log("Update admin details mapStateToProps: "+state.admin_reducer.edit_admin_details);
  return{
      edit_admin_details: state.admin_reducer.edit_admin_details,
  };
}

function mapDispatchToProps(dispatch) {
    console.log("updated admin data : ",this.updatedadmindetail );
    return bindActionCreators({handleAdminUpdate:handleAdminUpdate},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(EditAdminProfile);
