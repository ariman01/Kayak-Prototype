import React,{ Component } from 'react';
import homeIcon from './../../images/homescreen.png';
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem  from 'react-bootstrap/lib/NavItem'
import {history} from "./../../utils/util.js";
import {getAdminProfile} from './../../api/adminAPI';
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';


import * as UTIL from './../../utils/util';

class AdminDashboardHeader extends Component {

        handle_car_search=()=>{
          history.push('/editcars');
        };
        handle_car_add=()=>{
          history.push('/addcaradmin');

        };
        handle_car_billing=()=>{
          history.push('/admincarbilling');
        };

        handle_flight_search=()=>{
          history.push('/editflights');
        };
        handle_flight_add=()=>{
          history.push('/addflightadmin');
        };
        handle_flight_billing=()=>{
          history.push('/adminflightbilling');
        };

        handle_hotel_search=()=>{
          history.push('/edithotels');
        };
        handle_hotel_add=()=>{
          history.push('/addhoteladmin');
        };
        handle_hotel_billing=()=>{
          history.push('/adminhotelbilling');
        };

        handle_user_add=()=>{
          history.push('/adduseradmin');
        };
        handle_user_search=()=>{
          history.push('/searchuseradmin');
        };

        handle_admindashboard=()=>{
          history.push('/admindashboard');
        }


        handle_admin_logout(){
          UTIL.deleteServerToken("admin");
          history.push("/adminlogin");
        }
        handleAdminProfile(){
          if(UTIL.getAdminDetails()){
            this.props.getAdminProfile({username : UTIL.getAdminDetails()})
          }else{
            alert("Admin not logged in redirecting to login page");
            history.push("/adminlogin");
          }
        }
        handle_user_trace(){
          history.push("/traceuser");
        }


    render() {


        return (
            <div >
              <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a ><input type="image" onClick={this.handle_admindashboard} src={homeIcon}/></a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavDropdown eventKey={1} title="Cars">
                      <MenuItem eventKey={1.1} onClick={this.handle_car_search}>Search</MenuItem>
                      <MenuItem eventKey={1.2} onClick={this.handle_car_add}>Add</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={1.3} onClick={this.handle_car_billing}>Billing</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={2} title="Flights" >
                      <MenuItem eventKey={2.1} onClick={this.handle_flight_search}>Search</MenuItem>
                      <MenuItem eventKey={2.2} onClick={this.handle_flight_add}>Add</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={2.3} onClick={this.handle_flight_billing}>Billing</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Hotels">
                      <MenuItem eventKey={3.1} onClick={this.handle_hotel_search}>Search</MenuItem>
                      <MenuItem eventKey={3.2} onClick={this.handle_hotel_add}>Add</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3} onClick={this.handle_hotel_billing}>Billing</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={4} title="Users">
                      <MenuItem eventKey={4.1} onClick={this.handle_user_search}>Search</MenuItem>
                      <MenuItem eventKey={4.2} onClick={this.handle_user_add}>Add</MenuItem>
                      <MenuItem eventKey={4.2} onClick={this.handle_user_trace}>Trace User</MenuItem>
                    </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                    <NavDropdown eventKey={4} title="My Admin">

                      <MenuItem eventKey={4.1} onClick={()=>{this.handleAdminProfile()}}>Profile</MenuItem>
                      <MenuItem eventKey={4.2} onClick={this.handle_admin_logout}>Logout</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAdminProfile:getAdminProfile},dispatch);
}


export default connect(null,mapDispatchToProps)(AdminDashboardHeader);
