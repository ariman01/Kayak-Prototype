import React,{ Component } from 'react';
import './../../images/home.css';
import recommended from './../../images/recommended.jpg';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTripProtection_action} from './../../actions/flight_action';
class FlightTripProtection extends Component {
    constructor(props) {
        super(props);
        this.submitTripProtection = this.submitTripProtection.bind(this);

    }
    submitTripProtection()
    {
      const temp=this.props.current_flight.price+60+80.15;
      const payload={
          booking_amount:temp,
          flight_price:this.props.current_flight.price
      }
      this.props.addTripProtection_action(payload);
    }

  render() {
    return (
              <div className = "flight-trip-protection">
                  <strong>Add Trip Protection</strong>
                  <br></br>
                  <br></br>
                  <strong>We recommend trip protection</strong>
                  <br></br>
                  <br></br>
                  <p style={{fontSize : "11pt"}}>Protect your international trip with valuable Allianz Travel Insurance, because emergencies and accidents can happen at any time.</p>


                  <div className= "flight-trip-protection-middle-div1">
                      <input type="radio" name="insurance" value="yes" onChange={this.submitTripProtection}/> <strong>Yes. Add trip protection for $80.15 (USD) per passenger. </strong>

                  </div>

                  <div className= "flight_trip_protection-middle-div2">
                      <img src={recommended} style={{height : 40}}/>
                  </div>
                  <br></br>
                  <br></br>
                  <p style={{paddingLeft : 20, fontSize: "10pt"}}>&#10004; <strong>More flexibility</strong>: Protection for eligible international travel delays, trip cancellation, and trip interruption</p>
                  <p style={{paddingLeft : 20, fontSize: "10pt"}}>&#10004; <strong>Reliable benefits</strong>: Health protection in foreign countries (emergency medical and dental)</p>
                  <p style={{paddingLeft : 20, fontSize: "10pt"}}>&#10004; <strong>All the help you need</strong>: 24-hour global hotline and assistance services</p>
                  <p style={{paddingLeft : 20, fontSize: "10pt"}}>&#10004; <strong>Luggage protection</strong>: Benefits for covered loss, damage or theft of your belongings anywhere in the world</p>
                  <br></br>
                  <div >
                      <input type="radio" name="insurance" value="no" /> <strong>No, I understand</strong> by declining protection <strong>I am responsible</strong> for all cancellation fees and delay expenses.

                  </div>
                  <br></br>

                  <div className="flight-trip-damage-post">
                    <strong>Free Review Period</strong>: Receive a refund on your premium within at least 10 days of purchase, depending on your state of residence, if you decide to cancel your coverage and you have not filed a claim or departed on your trip.
                  </div>

                  <br></br>
                  Recommended by AGA Service Company, the licensed producer and administrator of this plan. Insurance benefits are underwritten by either BCS Insurance Company or Jefferson Insurance Company, depending on insureds state of residence. Terms, conditions and exclusions apply.
                  <a href="https://www.allianzworldwidepartners.com/usa/terms-and-conditions/001001988">Learn more</a>
                  <hr/>
            </div>

           );
  }
}
function mapStateToProps(state) {
    return {
        current_flight: state.flightdetails_reducer.current_flight
    };

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTripProtection_action:addTripProtection_action},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(FlightTripProtection);
