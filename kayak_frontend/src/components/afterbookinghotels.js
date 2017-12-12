import React,{ Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader1 from './headers/homepage_header1';
import {history} from "../utils/util";
class AfterBookingHotels extends Component {
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

                                          <td><strong>Hotel Name</strong></td>
                                          <td>{this.props.hotels.hotel_name}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Source City</strong></td>
                                          <td>{this.props.hotels.hotel_city}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Hotel Address</strong></td>
                                          <td>{this.props.hotels.hotel_address}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Booking Amount</strong></td>
                                          <td>{this.props.hotel_finalamount.booking_amount}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Start Date</strong></td>
                                          <td>{this.props.hotel_days.hotelfromdate}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>End Date</strong></td>
                                          <td>{this.props.hotel_days.hoteltodate}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <button onClick ={() => {history.push('./hoteldetails')}} style={{align:'center', width:"30%",marginTop:"2%",marginLeft:"20%",backgroundColor:'orange'}}><strong>Return to Hotel Results</strong></button>
                                    <button onClick ={() => {history.push('./hotels')}} style={{align:'center', width:"30%",marginTop:"2%",marginLeft:"20%",backgroundColor:'orange'}}><strong>Search Again</strong></button>
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
        hotels: state.hoteldetails_reducer.current_hotel,
        hotel_finalamount: state.hoteldetails_reducer.hotel_finalamount,
        hotel_days:state.hoteldetails_reducer.hotel_days
    };

}
export default connect(mapStateToProps,null)(AfterBookingHotels);
