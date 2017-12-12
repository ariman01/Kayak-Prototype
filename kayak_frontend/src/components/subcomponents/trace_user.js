import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {userTrace} from './../../api/adminAPI';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import * as UTILValidation from './../../utils/validation';
import UserTraceGraph from './user_trace_graph'


class TraceUser extends Component {
constructor(){
    super();
    this.searchuser ={}
  }

  handleSubmit(){
    if(UTILValidation.validateEmail(this.searchuser.user_id,"email")){
      this.props.userTrace({user_id:this.searchuser.user_id});
    }

  }

  render() {
    return (
              <div>
              <div>
                  <AdminDashboardHeader/>
              </div>

              <div className = "car-details-body">
                  <div style = {{marginLeft:520}}>
                      <input style={{width : 350}} placeholder="Enter email id of the user" id="email" onChange={(user_id) => {this.searchuser.user_id = user_id.target.value}}/>
                      <button style={{marginLeft:15}} onClick ={() => this.handleSubmit()} ><strong>Search</strong></button>
                      <br/>
                      <br/>
                  </div>
                
                <div className ="user-trace-body-centre">
                  <UserTraceGraph />
                </div>

              </div>

              </div>
           );
  }
}




function mapDispatchToProps(dispatch) {
    return bindActionCreators({userTrace:userTrace},dispatch);
}

function mapStateToProps(state){
  return{
      user_trace_data: state.admin_reducer.user_trace_data
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(TraceUser);
