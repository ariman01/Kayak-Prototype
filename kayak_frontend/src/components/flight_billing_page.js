import React,{ Component } from 'react';
import HomePageHeader from './headers/homepage_header';
import FlightDetails from './subcomponents/flight_details';
import TravelDetails from './subcomponents/flight_travel_details';
import FlightTripProtection from './subcomponents/flight_trip_protection'
import BillingInformation from './subcomponents/billing_information'
import FlightBillingSummary from './subcomponents/flight_billing_summary';
import FlightsTermsAndConditions from './subcomponents/flights_tnc';
import { connect } from 'react-redux';
import HomeHeader1 from './headers/homepage_header1';


import './../images/subcomponent.css';

class FlightBillingPage extends Component {


  render() {
    console.log("It will render flight billing page:");
    return (
              <div className="flight-billing-page">
                  <div className="flight-billing-page-header">
                  <HomeHeader1/>
                  </div>

                  <div className = "flight-billing-body">
                      <div className ="flight-billing-body-left-nav" >

                      </div>

                      <div className ="flight-billing-body-centre">
                          <FlightDetails data={this.props.current_flight}/>
                          <TravelDetails data={this.props.current_flight}/>
                          <FlightTripProtection data={this.props.current_flight}/>
                          <BillingInformation data={this.props.current_flight}/>
                          <FlightsTermsAndConditions data={this.props.current_flight}/>
                      </div>

                      <div className ="flight-billing-body-right-nav">
                          <FlightBillingSummary/>
                      </div>
                  </div>

              </div>
           );
  }
}
function mapStateToProps(state) {
    console.log("hiii"+state.flightdetails_reducer.current_flight);
    return {
        current_flight: state.flightdetails_reducer.current_flight,
    };

}
export default connect(mapStateToProps,null)(FlightBillingPage);
