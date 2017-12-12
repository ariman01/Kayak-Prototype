import React,{ Component } from 'react';
import './../../images/header.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import homeIcon from './../../images/homescreen.png';
import userIcon from './../../images/user3.png';
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem  from 'react-bootstrap/lib/NavItem'
import {history} from './../../utils/util';
import {useraction} from './../../actions/user_action';
import * as UTIL from './../../utils/util';

class HomeHeader1 extends Component {

  handleCarClick=()=>{
    history.push("/cars");
  }
  handleFlightClick=()=>{
    history.push("/flights");
  }
  handleHotelClick=()=>{
    history.push("/hotels");
  }
  handle_homepage=()=>{
    history.push('/cars');
  }
  handleLogout(){
    UTIL.deleteServerToken("user");
  
  }

  handleUserProfile(username){
    this.props.getuserdetails_action({email:username});
  }
    getDropDownElement(){
      console.log("UTIL.getUserDetails()",UTIL.getUserDetails());
      if(UTIL.getUserDetails()){
        return (<NavDropdown eventKey={4} style={{fontSize : "11pt"}} title="My Account" id="admin">
          <MenuItem eventKey={4.1} onClick ={() => {this.handleUserProfile(UTIL.getUserDetails())}} style={{fontSize : "11pt"}} >Profile</MenuItem>
          <MenuItem eventKey={4.2} onClick ={() => {this.handleLogout()}} style={{fontSize : "12pt"}} >Logout</MenuItem>
        </NavDropdown>)
      }else{
        return (<NavDropdown eventKey={4} style={{fontSize : "11pt"}} title="My Account" id="admin">
          <MenuItem eventKey={4.1} onClick ={() => {history.push('./signup')}} style={{fontSize : "11pt"}} >Sign up</MenuItem>
          <MenuItem eventKey={4.2} onClick ={() => {history.push('./signin')}} style={{fontSize : "12pt"}} >Sign in</MenuItem>

        </NavDropdown>)
      }
    }
    render() {

        return (
            <div >
              <Navbar inverse collapseOnSelect className="home-page-header">
                <Navbar.Header>
                  <Navbar.Brand>
                    <a ><input type="image" onClick={this.handle_homepage} src={homeIcon}/></a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={1} onClick={this.handleCarClick} style={{marginLeft : 40 , fontSize : "12pt"}}>Cars</NavItem>
                    <NavItem eventKey={1} onClick={this.handleFlightClick} style={{marginLeft : 40 , fontSize : "12pt"}}>Flights</NavItem>
                    <NavItem eventKey={1} onClick={this.handleHotelClick} style={{marginLeft : 40 , fontSize : "12pt"}}>Hotels</NavItem>
                  </Nav>
                  <Nav pullRight>
                    {this.getDropDownElement()}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({getuserdetails_action:useraction.getuserdetails_action},dispatch);
}
export default connect(null,mapDispatchToProps)(HomeHeader1);
