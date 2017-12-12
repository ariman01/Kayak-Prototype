import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import { setPrice } from './../../actions/car_action';
import {bindActionCreators} from 'redux';
class RentalCarPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
                price: '200',
                days: '2',
                totalprice_car:'',
                totaltax_days:'',
                booking_amount:''
        };
    }
    componentWillMount()
    {
        this.setState({
            price: this.props.data.price,
            days: this.props.car_days.days
        });
    }
    componentDidMount()
    {
        const {totalprice_car,totaltax_days,booking_amount} =this.state;
        const payload={
            totalprice_car:totalprice_car,
            totaltax_days:totaltax_days,
            booking_amount:totaltax_days+totalprice_car
        }
        this.props.setPrice(payload);
    }
  render() {
      const {price}=this.state;
      const {days}=this.state;
      const totalprice_car = price * days;
      const totaltax_days= this.props.car_days.days*8;
      const finalamount= totalprice_car+totaltax_days;
      this.state.totalprice_car=totalprice_car;
      this.state.totaltax_days=totaltax_days;
    return (
              <div className = "rental-car-price">
                    <strong>Rental Car Price</strong>
                    <br></br><br></br>
                    <table className="table table-hover" style ={{padding : 10}}>
                        <thead>
                            <tr>
                              <th></th>
                              <th>Per Day</th>
                              <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                              <tr>
                                <td><strong>Economy</strong>(Hunda Accent or similar)</td>
                                <td>${this.props.data.price}</td>
                                <td>${totalprice_car}</td>
                              </tr>
                              <tr>
                                <td>Taxes and fees</td>
                                <td>$8</td>
                                <td>${totaltax_days}</td>
                              </tr>
                              <tr>
                                <td><strong>Rental Car Total</strong></td>
                                <td>${this.props.data.price+8}</td>
                                <td>${finalamount}</td>
                              </tr>
                        </tbody>
                    </table>
              </div>
           );
  }
}
function mapStateToProps(state) {
    return {
        car_days: state.cardetails_reducer.car_days,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({setPrice:setPrice},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(RentalCarPrice);
