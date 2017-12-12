import React,{ Component } from 'react';
import homeIcon from './../../images/homescreen.png';
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem  from 'react-bootstrap/lib/NavItem'
import {history} from "./../../utils/util.js";
import { connect } from 'react-redux';
import * as UTIL from './../../utils/util';
class AdminLoginHeader extends Component {

        handle_sign_up=()=>{
          history.push('/adminlogin');
        };

        handle_admindashboard=()=>{
          history.push('/adminlogin');
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

                  <Nav pullRight>
                    <NavDropdown eventKey={4} title="My Admin">
                        <MenuItem eventKey={4.1} onClick={this.handle_sign_up}>Sign Up</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
}




export default AdminLoginHeader;
