import React,{ Component } from 'react';
import './../../images/subcomponent.css';
import { connect } from 'react-redux';
import booknow from './../../images/booknow.jpg';
import {bookflight_action} from './../../actions/flight_action';
import {bindActionCreators} from 'redux';
import * as util from './../../utils/util';
import * as UTIL from './../../utils/validation';
class FlightsTermsAndConditions extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    checkCreditDataValid(payload)
    {
        if(UTIL.validateCreditCard(payload.card_number) && UTIL.validateCVV(payload.cvv) && UTIL.validateName(payload.name_on_card) ){
            return true;
        }
          return false;
      }
      checkpersonalInfoValid(payload){
          if(payload.state && !UTIL.checkValidState(payload.state))
              return false
          if(payload.zip && !UTIL.validatePinCode(payload.zip))
              return false
          if(payload.phone && !UTIL.validatePhone(payload.phone))
              return false
          return true;
      }

    handleSubmit()
    {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        var booking = yyyy+"/"+mm+"/"+dd;


        const payload={
            user_id:this.props.usercarddetails.email,
            flight_id:this.props.current_flight.flight_id,
            flight_name:this.props.current_flight.carrier_name,
            src_city:this.props.current_flight.src_city,
            destination_city:this.props.current_flight.destination_city,
            start_date:this.props.flight_days.start_date,
            end_date:this.props.flight_days.end_date,
            booking_amount:this.props.flight_finalamount.booking_amount,
            state:this.props.usercarddetails.state,
            zip:this.props.usercarddetails.zip,
            card_number:this.props.usercarddetails.card_number,
            cvv:this.props.usercarddetails.cvv,
            phone:this.props.usercarddetails.phone,
            name_on_card:this.props.usercarddetails.name_on_card,
            booking_date:booking
        }
        if(UTIL.validateEmail(payload.user_id) && this.checkCreditDataValid(payload) && this.checkpersonalInfoValid(payload))
        {
        this.props.bookflight_action(payload);
        }
    }

  render() {
    return (
            <div className = "flights-terms-and-conditions">
              <strong style={{fontSize: "12pt"}}>Review Policies and Terms & Conditions</strong>

              <div className="flight-cancellation-change-policy">
                <strong>Change Policy</strong>
                <br></br>
                <br></br>
                <p>In addition to increased fares, if allowed, cancellation or changes may be subject to fees/penalties (fees/penalties vary based on factors such as airline, market, and the applicable fare rules), and may be $150 or more for domestic flights and $200 or more for international flights, plus up to $100 fee from Vayama per ticket. All change requests must be initiated at least 48 hours before scheduled departure of the original flight.</p>
                <br></br>
                <br></br>
                <strong>Cancellation Policy</strong>
                <p>Please refer to the Fare Rules for this itinerary cancellation policy</p>
              </div>
              <br></br>
              <div className="flight-policy1">
                <p>You will be issued electronic tickets. Adult passengers must have a valid government-issued photo ID. International travelers must have a valid passport. Additional documentation may be required for travel to and through some of the countries on your itinerary.</p>
              </div>
              <br></br>
              <p style={{fontSize:"9pt"}}>By clicking "Book" you agree to the airline's fare rules and <a href="https://www.kayak.com/terms-of-use">KAYAK's Terms and Conditions</a> and <a href="https://www.kayak.com/privacy">Privacy Policy</a>. Note: To offer this fare, Vayama might need up to one business day to issue the ticket.</p>

              <input type="checkbox" checked = "true"/>Email me KAYAKs deals
              <br></br>
              <br></br>
              <input type ="image" src = {booknow} onClick={this.handleSubmit} style={{height : 30}}/>

            </div>

           );
  }
}
function mapStateToProps(state) {
    return {
        current_flight:state.flightdetails_reducer.current_flight,
        flight_finalamount: state.flightdetails_reducer.flight_finalamount,
        flight_days:state.flightdetails_reducer.flight_days,
        user_id:state.users.user_id,
        currentUser:state.users.currentUser,
        usercarddetails: state.users.usercarddetails
    };

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({bookflight_action:bookflight_action},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(FlightsTermsAndConditions);
