import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import creditcards from './../../images/credit_cards.jpeg';
import {bindActionCreators} from 'redux';
import {billingUserinfoUpdate} from '../../actions/user_action';

class BillingInformation extends Component {

  handlebillingData(type, data1){
    console.log("handlebilling data in billing_info");
    let data = Object.assign({},this.props.usercarddetails);
    data[type] = data1;
    //console.log("handlebillingData:",data);
    this.props.billingUserinfoUpdate(data);

  }

  render() {
    return (
            <div className = "billing-information">
                  <strong style={{fontSize : "12pt"}}>
                    Enter Billing information
                  </strong>
                  <br></br>
                  <br></br>
                  <strong style={{fontSize : "11pt"}}>
                    Billing Address
                  </strong>
                  <br></br>
                  <div className="billing-information-fields">
                        <div className="billing-information-left-div">
                          <input type="text" style={{width:350}} className="form-control" id="street_line1"  defaultValue={this.props.usercarddetails.address} placeholder="Street (Line 1)" size="35"
                          onChange={(address) => {this.handlebillingData("address",address.target.value)}}/>
                          <br></br>
                          <input type="text" style={{width:350}} className="form-control" id="postal_code" defaultValue={this.props.usercarddetails.zip}  placeholder="Postal Code" size="35"
                          onChange={(zip) => {this.handlebillingData("zip",zip.target.value)}}/>
                          <br></br>
                          <input type="text" style={{width:350}} className="form-control" id="state" defaultValue={this.props.usercarddetails.state} placeholder="State/Region" size="35"
                          onChange={(state) => {this.handlebillingData("state",state.target.value)}}/>
                          <br></br>
                        </div>

                        <div className="billing-information-right-div">
                          <input type="text" style={{width:350}} className="form-control" id="street_line2"  defaultValue={this.props.usercarddetails.address} placeholder="Street (Line 2)" size="35"
                      onChange={(address) => {this.handlebillingData("address",address.target.value)}}/>
                          <br></br>
                          <input type="text" style={{width:350}} className="form-control" id="city" defaultValue={this.props.usercarddetails.city} placeholder="City" size="35"
                      onChange={(city) => {this.handlebillingData("city",city.target.value)}}/>
                          <br></br>
                          <input type="text" style={{width:350}} className="form-control" id="country" defaultValue="United States" size="35"
                          onChange={(country) => {}}/>
                          <br></br>
                        </div>

                  </div>
                  <hr/>
                  <br></br>
                  <strong>Card Details</strong>
                  <div className="card-info">
                      <div className="card-info-left">
                        <input type="text" style={{width:350}} className="form-control" id="name_on_card" defaultValue={this.props.usercarddetails.name_on_card} placeholder="Name on card" size="35"
                        onChange={(name_on_card) => {this.handlebillingData("name_on_card",name_on_card.target.value)}}/>
                        <br></br>
                        <div className="card-expiration">
                                  <div className="card-expiration-month">
                                    <select className="form-control" id="month"  style={{width:130}}>
                                      <option>01-Jan</option>
                                      <option>02-Feb</option>
                                      <option>03-Mar</option>
                                      <option>04-Apr</option>
                                      <option>05-May</option>
                                      <option>06-Jun</option>
                                      <option>07-Jul</option>
                                      <option>08-Aug</option>
                                      <option>09-Sep</option>
                                      <option>10-Oct</option>
                                      <option>11-Nov</option>
                                      <option>12-Dec</option>
                                    </select>
                                  </div>

                                  <div className="card-expiration-year">

                                      <select className="form-control" id="year"  style={{width:100}}>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                        <option>2028</option>
                                        <option>2029</option>
                                        <option>2030</option>
                                        <option>2031</option>
                                      </select>
                                    </div>

                                  <div className="card-cvv">
                                      <input type="text" style={{width:100}} className="form-control" id="cvv" defaultValue={this.props.usercarddetails.cvv} placeholder="CVV" size="35"
                                      onChange={(cvv) => {this.handlebillingData("cvv",cvv.target.value)}}/>


                                  </div>

                          </div>
                      </div>

                      <div className="card-info-right">
                        <input type="text" style={{width:350}} className="form-control" id="card_number"  value={this.props.usercarddetails.card_number} placeholder="Card number" size="35"
                        onChange={(card_number) => {this.handlebillingData("card_number",card_number.target.value)}}/>
                        <br></br>
                        <div className="credit-card-images">
                              <img src={creditcards} style={{height : 40 , width : 300, align : "right"}}/>
                        </div>
                      </div>
                  </div>

            </div>

           );
  }
}
function mapStateToProps(state) {
    console.log(" userdetails in flight_travel",state.users.userdetails);
    return  {
      usercarddetails: state.users.usercarddetails,
      currentUser:state.users.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    console.log("billing ");
    return bindActionCreators({billingUserinfoUpdate:billingUserinfoUpdate},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(BillingInformation);
