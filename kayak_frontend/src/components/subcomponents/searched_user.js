import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import {history} from "../../utils/util";
import * as adminActions from './../../actions/admin_action';
import {handleUserDelete} from './../../api/adminAPI';



import './../../images/admin.css';

class SearchedUser extends Component {
  handleEdit(){
      console.log("User edit:",this.props.data);
      this.props.editUserAdmin(this.props.data);
      history.push('/edituserform');
  }

  render() {
    console.log("It will display user profile");
    return (
      <div >

          <div style = {{marginLeft:200 ,marginRight: 200}}>
            <h2>User details</h2>
            <br/><br/>

            <table className="table">
                <tbody>
                  <tr>
                    <td><strong>First Name</strong></td>
                    <td>{this.props.data.first_name}</td>
                  </tr>
                  <tr>
                    <td><strong>Second Name</strong></td>
                    <td>{this.props.data.last_name}</td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td>{this.props.data.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Address</strong></td>
                    <td>{this.props.data.address}</td>
                  </tr>
                  <tr>
                    <td><strong>City</strong></td>
                    <td>{this.props.data.city}</td>
                  </tr>
                  <tr>
                    <td><strong>State</strong></td>
                    <td>{this.props.data.state}</td>
                  </tr>
                  <tr>
                    <td><strong>Zip</strong></td>
                    <td>{this.props.data.zip}</td>
                  </tr>
                  <tr>
                    <td><strong>Phone</strong></td>
                    <td>{this.props.data.phone}</td>
                  </tr>
                </tbody>
              </table>

            <button type="submit" className="btn btn-primary" style={{width:150}}
            onClick ={() => this.handleEdit()} >Edit</button>&nbsp;&nbsp;
            <button type="submit" className="btn btn-danger" style={{width:150}}
            onClick ={() => this.props.handleUserDelete(this.props.data)}>Delete</button>

          </div>

      </div>
           );
  }
}



function mapStateToProps(state){
  console.log("Search users mapStateToProps: "+state.admin_reducer.searchedUser);
  return{
      searchedUser: state.admin_reducer.searchedUser,
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({editUserAdmin:adminActions.editUserAdmin,
                                handleUserDelete: handleUserDelete},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchedUser);
