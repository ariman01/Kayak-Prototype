import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import carIcon from './../../images/audi.png'
import viewDeal from './../../images/viewdeal.png'
import userIcon from './../../images/user1.png';
import baggageIcon from './../../images/car_baggage.png';
import cardoorIcon from './../../images/car_door.png';
import foxIcon from './../../images/fox.png';
import {history} from './../../utils/util.js';
import {bindActionCreators} from 'redux';
import {currentcar_action} from './../../actions/car_action';
import { useraction } from './../../actions/user_action';
import * as UTIL from './../../utils/util';
import {userapi} from './../../api/userAPI';
import * as Images from './../../utils/images';
class CarTile extends Component {
    constructor(props) {
        super(props);
        this.handleView = this.handleView.bind(this);
    }
  handleView(data){
    var email= UTIL.getUserDetails();
    if(email){
    this.props.get_user_card_details_action({email:email,data:data});
  }
  else {
    this.props.currentcar_action(data);
  }
}


  render() {
    return (
      <div className="tile">
          <div className="tiled1">
                  <div className="tiled1-img-pane" style={{float:"left",width:"100%"}}>
                      <h3>{this.props.data.car_type}</h3>
                      <h5 style={{color:"grey"}}>{this.props.data.name} or similar car</h5>
                      <img src = {userIcon}/> {this.props.data.capacity}
                      <img src = {baggageIcon} style={{padding:10}}/> {this.props.data.no_of_bags}
                      <img src = {cardoorIcon} style={{padding:10}}/> {this.props.data.no_of_doors}
                  </div>
                  <div style={{width:"100%"}}>
                      <div className="car-agency-image">
                          <img src = {Images.retrieveCarAgencyImages(this.props.data.rental_agency)} /><br/>
                          {this.props.data.rental_agency}
                      </div>

                      <div className="car-des-name" >

                         <span style={{fontSize:15,marginLeft:8,marginRight:8}}>  &nbsp;{this.props.data.src_city} </span><br/>
                         <span style={{fontSize:15,marginLeft:8,marginRight:8}}>  &nbsp;{this.props.data.destination_city} </span>
                      </div>
                  </div>
           </div>

          <div className="tiled2" style={{float:"left"}}>
              <div style={{marginTop:"10%"}}>
                  <span style={{color:"grey"}}>Pay Later</span> - <span style={{color:"green"}}>Free Cancellation</span>
                  <img  className="car-img" src={Images.retrieveCarImages(this.props.data.car_type)}/>
              </div>
          </div>

          <div className="tiled3">
              <strong style={{fontSize:25,color:"black"}}>${this.props.data.price}</strong>
              <h4>Total</h4>
              <h5 style={{color:"grey",marginTop:"15%"}}>Kayak</h5>
              <img src={viewDeal} style={{width:"80%",marginTop:"2%"}}
              onClick ={() => this.handleView(this.props.data)}/>
          </div>
      </div>
          );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({currentcar_action:currentcar_action,get_user_card_details_action:useraction.get_user_card_details_action},dispatch);
}
export default connect(null,mapDispatchToProps)(CarTile);
