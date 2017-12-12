import React,{ Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader1 from './headers/homepage_header1';
import {history} from "../utils/util";
class AfterBookingCars extends Component {
    constructor(){
        console.log("its show in constructor");
        super();
    }
    render() {
        return (
            <div>
                <div className  = "show-hotel-header">
                    <HomeHeader1 />
                </div>
                <div className = "car-details-body">
                    <div className ="car-details-body-centre">
                    <b style={{textAlign:'center',marginLeft:'20%'}}><h2>Thank You for booking with us..!!</h2></b><br/><br/>
                    <b style={{textAlign:'center',marginLeft:'20%'}}><h2>Booking Details:<span className="glyphicon glyphicon-ok" style={{marginLeft:"10%", color:"green", fontSize:30}}></span></h2></b>
                                  <div>
                                  <table className="table" style={{align:'center',marginLeft:'20%'}}>
                                      <tbody>
                                        <tr>
                                          <td><strong>Car Type</strong></td>
                                          <td>{this.props.cars.car_type}</td>
                                        </tr>
                                        <tr>

                                          <td><strong>Car Name</strong></td>
                                          <td>{this.props.cars.name}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Source City</strong></td>
                                          <td>{this.props.cars.src_city}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Destination City</strong></td>
                                          <td>{this.props.cars.destination_city}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Booking Amount</strong></td>
                                          <td>{this.props.car_finalamount.booking_amount}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>Start Date</strong></td>
                                          <td>{this.props.car_days.carfromdate}</td>
                                        </tr>
                                        <tr>
                                          <td><strong>End Date</strong></td>
                                          <td>{this.props.car_days.cartodate}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <button onClick ={() => {history.push('./cardetails')}} style={{align:'center', width:"30%",marginTop:"2%",marginLeft:"20%",backgroundColor:'orange'}}><strong>Return to Car Results</strong></button>
                                    <button onClick ={() => {history.push('./cars')}} style={{align:'center', width:"30%",marginTop:"2%",marginLeft:"20%",backgroundColor:'orange'}}><strong>Search Again</strong></button>
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
        cars: state.cardetails_reducer.current_car,
        car_finalamount: state.cardetails_reducer.car_finalamount,
        car_days:state.cardetails_reducer.car_days
    };

}
export default connect(mapStateToProps,null)(AfterBookingCars);
