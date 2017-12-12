import React,{ Component } from 'react';
import './../../images/home.css';
import limitedseats from './../../images/limitedseats.png';
import {connect} from 'react-redux';
class FlightDetails extends Component {
  render() {
    return (
              <div className = "flight-details">
                <div>
                  <h3>You are flying</h3>
                  <hr/>
                </div>

                <div className = "flight-departure-return">
                    <div className= "flight-departure-return-text">
                        <strong>{this.props.data.src_city} to {this.props.data.destination_city}</strong>
                        <br></br>
                        {this.props.data.carrier_name}, round-trip, mixed, {this.props.flight_days.persons} adult
                        <br></br>
                        <br></br>
                        Depart: {this.props.flight_days.flightfromdate}
                        <br></br>
                        Return: {this.props.flight_days.flighttodate}
                        <br></br>
                        <img src={limitedseats} style={{height: 30 }}/>
                        <br></br>
                        <hr/>
                    </div>
                </div>
              </div>

           );
  }
}
function mapStateToProps(state) {
    console.log("hiii"+state.flightdetails_reducer.flight_days.days);
    return {
        flight_days: state.flightdetails_reducer.flight_days,
    };

}
export default connect(mapStateToProps,null)(FlightDetails);
