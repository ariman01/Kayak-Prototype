import React,{ Component } from 'react';
import './../../images/home.css';
import homeIcon from './../../images/homescreen.png';
import userIcon from './../../images/user3.png';
import {history} from "./../../utils/util";
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
class HomePageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleOpenMenu = () => {
        this.setState({
            openMenu: true,
        });
    }

    handleOnRequestChange = (value) => {
        this.setState({
            openMenu: value,
        });
    }
    signup()
    {
        history.push('./signup');
    }
    signin()
    {
        history.push('./signin');
    }
    redirect()
    {
        history.push('/flights');
    }
  render() {
    console.log("Search CarSearch Bar Page");
    return (
      <div className="row">
            <nav className="home-nav">
                <div className="home-logo" style ={{height:10}}>
                    <img src={homeIcon} onClick={this.redirect}/>
                </div>
                <ul className="home-navbar" >
                    <a className="home-nav-link" href="/hotels">Hotels</a>
                    <a className="home-nav-link" href="/flights">Flights</a>
                    <a className="home-nav-link" href="/cars">Cars</a>
                    <a className="user-account"><span><img src ={userIcon} onClick={this.handleOpenMenu}/></span><label onClick={this.handleOpenMenu}>My Account</label>
                        {/*  <IconMenu
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            iconButtonElement={<IconButton></IconButton>}
                            open={this.state.openMenu}
                            onRequestChange={this.handleOnRequestChange}>
                            <div >
                                <button style={{margin:38,marginBottom:5,backgroundColor:'darkorange',width:225,color:'white',height:45,textAlign:'center'}} onClick={this.signup}>SignUp</button><br/>
                                <button style={{margin:38,marginTop:5,backgroundColor:'white',width:225,color:'darkorange',height:45,textAlign:'center',borderColor:'darkorange'}} onClick={this.signin}>SignIn</button>
                            </div>
                        </IconMenu>*/}

                    </a>

                </ul>
             </nav>
             <hr className="home-uline"/>

      </div>
          );
  }
}

export default HomePageHeader;
