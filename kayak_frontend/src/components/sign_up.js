import React,{ Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import facebookicon from './../images/facebookicon.jpg';
import googleicon from './../images/googleicon.jpg';
import {history} from "./../utils/util";
import { useraction } from './../actions/user_action';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import FlightSearchBar from './searchbars/flight_search_bar.js';
import HomeHeader1 from './headers/homepage_header1';
import '../images/home.css';
import HomeScreenButtonPanel from './searchbars/homescreen_button_panel';
import * as UTIL from '../utils/validation';
class SignUp extends Component
{
    constructor()
    {
        super();
        this.state = {
            user: {
                username: '',
                password: ''
            },
            showModal:false
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.username && user.password) {
          if(UTIL.validateEmail(user.username))
          {
              this.props.signup_action(user);
          }
          else {
            
          }
        }
        else {
          alert("Please provide the required fields !!!");
        }
    }

    login()
    {
        history.push('./signin');
    }
    render() {

        const { showModal } = this.state;
        console.log("its before modal"+showModal);
        return (
            <div className="flighthome">
                <HomeHeader1/>
                <div style={{paddingTop:"12%"}}>
                    <HomeScreenButtonPanel/>
                    <FlightSearchBar/>
                </div>

            <div>
                <Modal style={{paddingTop:100}} bsSize="sm" show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton style={{backgroundColor:'#e0e0e0',color:'#545456'}}>Please Signup to Continue
                    </Modal.Header>
                    <Modal.Body style={{paddingTop:25}}>
                        <button style={{margin:1,backgroundColor:'#39559f',width:250,color:'white',height:45,textAlign:'center'}} onClick={this.signup}><img src ={facebookicon} style={{width:20,height:25,float:'left'}}/>&nbsp;&nbsp;Continue with Facebook</button><br/><br/>
                        <button style={{margin:1,backgroundColor:'#558fe6',width:250,color:'white',height:45,textAlign:'center'}} onClick={this.signup}><img src ={googleicon} style={{width:25,height:25,float:'left'}}/>&nbsp;&nbsp;Continue with Google</button><br/><br/>
                        <div style={{color:'#545456',alignContent:'center'}}><b>Or Create A Kayak Account</b></div><br/><br/>
                        <input type="email" name="username" value={this.state.username} placeholder={"Email Address"} style={{backgroundColor:'rgb(250, 255, 189)',borderColor:'#e3e3e3',width:250,height:45}} onChange={this.handleChange}/><br/><br/>
                        <input type="password" name="password" value={this.state.password} placeholder={"Password"} style={{backgroundColor:'rgb(250, 255, 189)',borderColor:'#e3e3e3',width:250,height:45}} onChange={this.handleChange}/><br/><br/>
                        <button style={{backgroundColor:'#545456',color:'white',width:250,height:45}} onClick={this.handleSubmit}>Create Account</button>
                    </Modal.Body>
                    <Modal.Footer>
                        <label style={{float:'left'}}>Already have an account? </label><Button onClick={this.login}>SignIn</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({signup_action:useraction.signup_action},dispatch);
}
export default connect(null,mapDispatchToProps)(SignUp);
