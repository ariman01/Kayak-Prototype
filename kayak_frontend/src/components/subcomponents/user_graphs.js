import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';

import './../../images/admin.css';

class UserGraphs extends Component {


  render() {
    return (
            <div>

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <br></br>
                <h1>Graph 1 :(description of graph) </h1>
                <div className="car-graph-1">

                </div>
                <br></br>
                <h1>Graph 2 :(description of graph) </h1>
                <div className="car-graph-2">
                </div>

                <br></br>
                <h1>Graph 3 :(description of graph) </h1>
                <div className="car-graph-3">
                </div>

            </div>
           );
  }
}



export default UserGraphs;
