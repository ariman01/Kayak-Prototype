import React,{ Component } from 'react';
import './../../images/subcomponent.css';
import {connect} from 'react-redux';

class hotelBillingSummary extends Component {

  render() {

    return (
      <div className="carr-billing-summary">
            <div className="car-summary" >
                <div className="car-summary-1">
                    <strong style={{fontSize : "11pt"}}>Summary</strong>
                    <h6>1 room, {this.props.current_hotel.capacity} adults</h6>
                    <h6>{this.props.hotel_days.hotelfromdate} - {this.props.hotel_days.hoteltodate}({this.props.hotel_days.days}nights)</h6>
                    <hr/>
                </div >
                <div className="car-summary-2">
                    <div>
                    <strong style={{fontSize : "11pt"}}> Charges</strong>
                    <h5>Executive suite</h5>
                    <h5>${this.props.hotel_finalamount.hotel_price} nights</h5>
                    <hr/>
                    </div>

                    <div>
                    <h5>Tax and Fees</h5>
                    <h5>${this.props.hotel_finalamount.hotel_tax}</h5>
                    <hr/>
                    </div>

                    <div>
                    <h5>Total cost</h5>
                    <h5>${this.props.hotel_finalamount.booking_amount}</h5>
                    <hr/>
                    </div>

                </div>
          </div>

          <div className="car-summary-support">
          <strong>Customer Support </strong><br/>
          Sixt will provide customer support for this reservation.
          </div>
      </div>
          );
  }
}
function mapStateToProps(state) {
    console.log("hiii"+state.hoteldetails_reducer.hotel_days.days);
    return {
        hotel_days: state.hoteldetails_reducer.hotel_days,
        current_hotel:state.hoteldetails_reducer.current_hotel,
        hotel_finalamount:state.hoteldetails_reducer.hotel_finalamount
    };

}

export default connect(mapStateToProps,null)(hotelBillingSummary);
