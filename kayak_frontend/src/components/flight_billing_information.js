import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import AdminDashboardHeader from './headers/admin_dashboard_header';
import FlightDetails from './subcomponents/flight_details';
import {getFlightBillingInfo} from './../api/adminAPI';
import './../images/billing.css';

class FlightBillingInfo extends Component {

  constructor(){
    super();
    this.data = {};

  }

  getbills(bills){
    return bills.map((bill)=>{
      return (<tr>
            <td style={{width:89}}>{bill.booking_id}</td>
            <td style={{width:65}}>{bill.user_id}</td>
            <td>{bill.flight_id}</td>
            <td>{new Date(bill.booking_date).toISOString().slice(0,10)}</td>
            <td>{bill.booking_amount}</td>
            <td>{bill.src_city}</td>
            <td>{bill.destination_city}</td>
            </tr>
          )
    });
  }

  render() {
    return (
              <div className="Flight-billing-Info">

                  <div className="flight-billing-page-header">
                  <AdminDashboardHeader/>
                  </div>
                     <div className = "heading">
                      <h1> Flight Billing Information </h1>
                     </div>

                     <div className ="search-options">
                          Select Date :
                          <input type="date" id="date" name="bill-date"
                            onChange={(dateEvent) => {this.data.date = dateEvent.target.value}}/>


                            <span id="or"> or </span>

                            <select className="dropdown"
                            onChange={(monthEvent) => {this.data.month = monthEvent.target.value}}>
                            <option>Select Month</option>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                            </select>

                              </div>

                            <button type="submit"onClick={() => this.props.getFlightBillingInfo(this.data)}id="search" style={{width:150}}>Search</button>

                    <div class="billing-list">
                        </div>
                        <div class="contain" id="table">
                            <table class="table table-hover">
                                <thead>
                                  <tr>
                                  <th style={{width:90}}>Booking ID</th>
                                  <th style={{paddingLeft: 65}}>User ID</th>
                                  <th style={{paddingLeft:110}}>Flight ID</th>
                                  <th style={{paddingLeft: 100}}>Booking Date</th>
                                  <th >Booking Amount</th>
                                  <th style={{paddingLeft: 100}}>src city</th>
                                  <th style={{paddingLeft: 100}}>des city Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {this.getbills(this.props.flightBillingInformation)}
                                </tbody>
                            </table>
                        </div>
                    </div>
           );
  }
}

function mapStateToProps(state){
  console.log("maps to props flight billing:",state.admin_reducer.flightBillingInformation);
  return {
    flightBillingInformation:state.admin_reducer.flightBillingInformation
  };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getFlightBillingInfo:getFlightBillingInfo},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(FlightBillingInfo);
