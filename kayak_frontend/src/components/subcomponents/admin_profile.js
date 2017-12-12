import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import {history} from "../../utils/util";
import * as adminActions from './../../actions/admin_action';
import {handleUserDelete} from './../../api/adminAPI';



import './../../images/admin.css';

class AdminProfile extends Component {
  handleEdit(){
      console.log("Admin edit:",this.props.admin_details);
      this.props.editAdmin(this.props.admin_details);
     history.push('/editadminprofile');
  }

  render() {
    console.log("It will display user profile");
    return (
      <div >
          <div>
            <AdminDashboardHeader/>
          </div>

          <div style = {{marginLeft:500 ,marginRight: 600}}>
            <h2>Admin details</h2>
            <br/><br/>
            <div>

                {this.props.admin_details.map((admin)=>{
                    return (
                      <div>
                      <table className="table">
                          <tbody>
                            <tr>
                              <td><strong>First Name</strong></td>
                              <td>{admin.first_name}</td>
                            </tr>
                            <tr>
                              <td><strong>Second Name</strong></td>
                              <td>{admin.last_name}</td>
                            </tr>
                            <tr>
                              <td><strong>Address</strong></td>
                              <td>{admin.address}</td>
                            </tr>

                            <tr>
                              <td><strong>City</strong></td>
                              <td>{admin.city}</td>
                            </tr>
                            <tr>
                              <td><strong>State</strong></td>
                              <td>{admin.state}</td>
                            </tr>
                            <tr>
                              <td><strong>Zip</strong></td>
                              <td>{admin.zip}</td>
                            </tr>
                            <tr>
                              <td><strong>Phone</strong></td>
                              <td>{admin.phone}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )
                })}
            </div>

            <button type="submit" className="btn btn-primary" style={{width:150}}
            onClick ={() => this.handleEdit()} >Edit</button>&nbsp;&nbsp;


          </div>

      </div>
           );
  }
}

function mapStateToProps(state) {
    console.log("maps to props  car edit form :"+state.admin_reducer.admin_details.length);
    return {
        admin_details: state.admin_reducer.admin_details,
    };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({editAdmin:adminActions.editAdmin},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminProfile);
