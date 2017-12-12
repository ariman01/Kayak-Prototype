import React,{ Component } from 'react';
import './../../images/home.css';
import recommended from './../../images/recommended.jpg';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addDamageProtection_action} from './../../actions/car_action';
class RentalCarDamageProtection extends Component {

    constructor(props) {
        super(props);
        this.submitDamageProtection = this.submitDamageProtection.bind(this);

    }
    submitDamageProtection()
    {
        const temp=this.props.car_finalamount.totalprice_car+this.props.car_finalamount.totaltax_days+(9*this.props.car_days.days);
        const payload={
            booking_amount:temp,
            totalprice_car:this.props.car_finalamount.totalprice_car,
                totaltax_days:this.props.car_finalamount.totaltax_days
        }
        this.props.addDamageProtection_action(payload);
    }
  render() {
    return (
              <div className = "rental-car-damage-protection">
                  <strong>Add Rental Car Damage Protection</strong>
                  <br></br>
                  <br></br>
                  <br></br>
                  Protect your rental car in Oakland
                  <br></br>
                  <strong>Receive primary coverage to avoid going through your auto insurance</strong>
                  <br></br>

                  <div className= "rental-car-damage-middle-div1">
                      <input type="radio" name="insurance" value="yes" onChange={this.submitDamageProtection}/> <strong>Yes</strong>, add Rental Car Damage Protection for <strong>only $9 per day.</strong>

                  </div>

                  <div className= "rental-car-damage-middle-div2">
                      <img src={recommended} style={{height : 40}}/>
                  </div>
                  <br></br>
                  <br></br>
                  <p style={{paddingLeft : 20}}>&#10004; Covers costs if your rental car is stolen or is damaged in an accident or while left unattended</p>
                  <p style={{paddingLeft : 20}}>&#10004; Provided as primary coverage – no deductible</p>
                  <p style={{paddingLeft : 20}}>&#10004; Toll-free, 24-hour emergency hotline help included</p>
                  <div className="rental-car-damage-post">
                    "It’s a good idea… to have car insurance when renting a car"– Huffington Post, Mar 2016
                  </div>
                  <br></br>
                  <br></br>
                  <input type="radio"/> <strong> No</strong>, I will not protect my rental car and I agree to pay for damages incurred.
                  <br></br>
                  <br></br>
                  "Nothing goes wrong when I travel." – Familiar with Murphy's Law? There's a first time for everything.
                  <br></br>
                  <br></br>
                  Recommended by AGA Service Company, the licensed producer and administrator of this plan. Insurance benefits are underwritten by either BCS Insurance Company or Jefferson Insurance Company, depending on insured's state of residence. Terms, conditions and exclusions apply.
                  <a href="https://www.allianzworldwidepartners.com/usa/terms-and-conditions/001001988">Learn more</a>

            </div>

           );
  }
}
function mapStateToProps(state) {
    return {
        car_finalamount: state.cardetails_reducer.car_finalamount,
        car_days:state.cardetails_reducer.car_days
    };

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addDamageProtection_action:addDamageProtection_action},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(RentalCarDamageProtection);
