import React,{ Component } from 'react';
import './../../images/subcomponent.css';
import { connect } from 'react-redux';

class CarBillingSummary extends Component {

  render() {
    return (
      <div className="carr-billing-summary">
            <div className="car-summary" >
                <div className="car-summary-1">
                    <strong ><h4>Summary</h4></strong>
                    <h6>{this.props.current_car.car_type}, {this.props.current_car.capacity} people/{this.props.current_car.no_of_bags}bag, Automatic transmission, Air-conditioning {this.props.car_days.carfromdate} - {this.props.car_days.cartodate} ({this.props.car_days.days} day)</h6>
                    <hr/>
                </div >
                <div className="car-summary-2">
                    <div>
                        <strong><h4><b> Charges</b> </h4></strong>
                    <h5>{this.props.current_car.car_type}
                        ({this.props.car_days.days} day/days)</h5>
                        ${this.props.car_finalamount.totalprice_car}
                    <hr/>
                    </div>

                    <div>
                        <h5><b>Tax and Fees </b></h5>
                        ${this.props.car_finalamount.totaltax_days}
                    <hr/>
                    </div>

                    <div>
                    <h5>Total cost</h5>
                        ${this.props.car_finalamount.booking_amount}
                    <hr/>
                    </div>
                    <div>
                    <h6>Rental Car Damage Protection Not Selected</h6>
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
    return {
        car_finalamount: state.cardetails_reducer.car_finalamount,
        current_car:state.cardetails_reducer.current_car,
        car_days:state.cardetails_reducer.car_days
    };

}

export default connect(mapStateToProps,null)(CarBillingSummary);
