import React,{ Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import HomePageHeader1 from './headers/homepage_header1';
import facebookicon from './../images/facebookicon.jpg';
import googleicon from './../images/googleicon.jpg';
import {history} from "./../utils/util";
import { useraction } from './../actions/user_action';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import FlightSearchBar from './searchbars/flight_search_bar.js';
import '../images/home.css';
import * as UTIL from '../utils/util';
import HomeScreenButtonPanel from './searchbars/homescreen_button_panel';
class DeleteAccount extends Component
{
    constructor()
    {
        super();
        this.state = {
            showModal:false
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount()
    {
        this.open();
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    handleSubmit(event) {
        event.preventDefault();
        var email= UTIL.getUserDetails();
        if(email){
          const payload={user_id:email};
              this.props.deleteuser_action(payload);
        }else{
          alert("User not logged in !!!");

    }
  }
    render() {

        const { showModal } = this.state;
        console.log("its before modal"+showModal);
        return (
            <div className="flighthome">
                <div className="user-profile-header">
                  <HomePageHeader1/>
                </div>

                <div>
                    <Modal style={{paddingTop:100}} bsSize="sm" show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton style={{backgroundColor:'#e0e0e0',color:'orange'}}>Wish to delete your account?
                        </Modal.Header>
                        <Modal.Body style={{paddingTop:25}}>
                            <button style={{backgroundColor:'orange',color:'white',width:250,height:45}} onClick={this.handleSubmit}>Delete Account</button><br/><br/>
                            <button style={{backgroundColor:'orange',color:'white',width:250,height:45}} onClick={() =>history.push('/cars')}>Cancel</button>
                        </Modal.Body>

                    </Modal>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteuser_action:useraction.deleteuser_action},dispatch);
}
export default connect(null,mapDispatchToProps)(DeleteAccount);
