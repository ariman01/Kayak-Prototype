import React,{ Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader1 from './headers/homepage_header1';
import {history} from "../utils/util";
class AfterBookingFlights extends Component {
    constructor(){
        console.log("its show in constructor");
        super();
    }
    render() {
        return (
            <div>
                <div className="show-hotel-header">
                    <HomeHeader1/>
                </div>
                <div className = "car-details-body">
                    <div className ="car-details-body-centre">
                    <b style={{textAlign:'center',marginLeft:'20%'}}><h2>Thank You for booking with us..!!</h2></b><br/><br/>
                    <b style={{textAlign:'center',marginLeft:'20%'}}><h2>Booking Details:<span className="glyphicon glyphicon-ok" style={{marginLeft:"10%", color:"green", fontSize:30}}></span></h2></b>
                                  <div>
                                  <table className="table" style={{align:'center',marginLeft:'20%'}}>
                                      <tbody>
                                        <tr>
                                          <td><strong>Flight ID</strong></td>
                                          <td>{this.props.flights.flight_id}</td>
                                        </tr>
                                        <tr>

                                          <td><strong>Flight Name</strong></td>
                                          <td>{this.props.flights.carrier_name}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Source City</strong></td>
                                          <td>{this.props.flights.src_city}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Destination City</strong></td>
                                          <td>{this.props.flights.destination_city}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Booking Amount</strong></td>
                                          <td>{this.props.flight_finalamount.booking_amount}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Start Date</strong></td>
                                          <td>{this.props.flight_days.flightfromdate}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>End Date</strong></td>
                                          <td>{this.props.flight_days.flighttodate}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <button onClick ={() => {history.push('./flightdetails')}} style={{align:'center', width:"30%",marginTop:"2%",marginLeft:"20%",backgroundColor:'orange'}}><strong>Return to Flight Results</strong></button>
                                    <button onClick ={() => {history.push('./flights')}} style={{align:'center', width:"30%",marginTop:"2%",marginLeft:"20%",backgroundColor:'orange'}}><strong>Search Again</strong></button>
                                  </div>
                    </div>

                    <div className ="car-details-body-right-nav">

                    </div>
                </div>


            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        flights: state.flightdetails_reducer.current_flight,
        flight_finalamount: state.flightdetails_reducer.flight_finalamount,
        flight_days:state.flightdetails_reducer.flight_days
    };

}
export default connect(mapStateToProps,null)(AfterBookingFlights);
