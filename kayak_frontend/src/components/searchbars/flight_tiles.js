import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import * as Images from './../../utils/images';
import './../../images/flight.css';
import {history} from './../../utils/util.js';
import {bindActionCreators} from 'redux';
import {currentflight_action} from './../../actions/flight_action';
import { useraction } from './../../actions/user_action';
import * as UTIL from './../../utils/util';
import {userapi} from './../../api/userAPI';


class FlightTile extends Component {
  constructor(props) {
      super(props);
      this.handleView = this.handleView.bind(this);
  }
handleView(data){
  var email= UTIL.getUserDetails();
  console.log("its handleView in flight_tiles"+email);
  if(email){
  this.props.get_user_card_details_action({email:email,data:data});
}
else {
  this.props.currentflight_action(data);
}

}
  render() {
    console.log("Flight tiles page:",this.props.data);
    return (
      <div className="flight-tile">

          <div className="flight-tile1">
            <div className="flight-tile-div">
            <img src={Images.retrieveImages(this.props.data.carrier_name)}/><br/>
                {this.props.data.carrier_name}
            </div>
            <div className="flight-tile-div">
                {this.props.data.departure_time} <br/>
                {this.props.data.src_city}
            </div>
            <div className="flight-tile-div">
              <span style ={{color:"grey",bold:true}}>____________ <br/> non-stop</span>
            </div>
            <div className="flight-tile-div">
            1:54 PM<br/>
                {this.props.data.destination_city}
            </div>
            <div className="flight-tile-div">
              <span style={{marginLeft:"30%"}}>{this.props.data.flight_duration} hours</span>
            </div>

          </div>
          <div className="flight-tile2">
              <strong style={{fontSize:25,color:"black",marginTop:20}}>${this.props.data.price}</strong>
              <h4>Total</h4>
              <h5 style={{color:"grey",marginTop:"8%"}}>Kayak</h5>
              <img src={Images.getImages().view_deal} style={{width:"80%"}}
              onClick ={() => this.handleView(this.props.data)}/>
          </div>
      </div>
          );
  }
}
function mapStateToProps(state) {
    console.log("hiii"+state.flightdetails_reducer.current_flight.price);
    return {
        flight_days: state.flightdetails_reducer.flight_days,
        flight_finalamount:state.flightdetails_reducer.flight_finalamount
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({currentflight_action:currentflight_action,get_user_card_details_action:useraction.get_user_card_details_action},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(FlightTile);
