import React,{ Component } from 'react';
import HomePageHeader1 from './../headers/homepage_header1';
import './../../images/admin.css';
import { connect } from 'react-redux';
import {history} from "./../../utils/util";
import * as UTIL from './../../utils/util';
import * as Util from './../../utils/validation';
import {bindActionCreators} from 'redux';
import {addcarddetailsAPI} from './../../api/userAPI';

class AddPaymentDetailsForm extends Component {
  constructor(){
    super();
    this.carddetail ={}
  }

  checkStateandzip(data){
    if(data.state && !Util.checkValidState(data.state))
        return false
    if(data.zip && !Util.validatePinCode(data.zip))
        return false
    if(data.city && !Util.checkValidCity(data.city))
        return false
    if(data.name_on_card && !Util.validateName(data.name_on_card))
        return false
    return true
  }


  checkCreditDataValid(data){
    if(Util.validateCreditCard(data.card_number) && Util.validateCVV(data.cvv)){
        return true;
    }
      return false;
  }


 handleAdd(data){
   var email= UTIL.getUserDetails();

   if(email){
     if(Util.validateEmail(email) && this.checkCreditDataValid(data) && this.checkStateandzip(data)){
       const payload = {
           name_on_card : data.name_on_card,
           card_number : data.card_number,
           card_type : data.card_type,
           address : data.address,
            city : data.city,
           state : data.state,
            zip : data.zip,
            email : email
          }
          this.props.addcarddetailsAPI(payload);
     }
   }
else{
     alert("User not logged in !!!");
  }
}

  render() {
    return (
            <div className = "add-hotel-admin">

            <div className="show-hotel-header">
                <HomePageHeader1/>
            </div>

                <div className = "add-hotel-admin-body">
                  <h2>Add Payment Detail</h2>
                  <hr/>


                  <label>Name on Card</label>
                  <input type="text" style={{width:400}} className="form-control" onChange={(name_on_card) => {this.carddetail.name_on_card = name_on_card.target.value}} placeholder="Name on Card" size="35"/>
                  <br></br>
                  <label>Card Number</label>
                  <input type="text" style={{width:400}} className="form-control" onChange={(card_number) => {this.carddetail.card_number = card_number.target.value}}  placeholder="card Number" size="35"/>
                  <br></br>
                  <label>Card Type</label>
                  <input type="text" style={{width:400}} className="form-control" onChange={(card_type) => {this.carddetail.card_type = card_type.target.value}}  placeholder="Card Type" size="35"/>
                  <br></br>
                  <label>CVV</label>
                  <input type="text" style={{width:400}} className="form-control" onChange={(cvv) => {this.carddetail.cvv = cvv.target.value}}  placeholder="CVV" size="35"/>
                  <br></br>
                  <label>Address</label>
                  <input type="text" style={{width:400}} className="form-control" onChange={(address) => {this.carddetail.address = address.target.value}}  placeholder="Address" size="35"/>
                  <br></br>
                  <label>City</label>
                  <input type="text" style={{width:400}} className="form-control" onChange={(city) => {this.carddetail.city = city.target.value}}  placeholder="City" size="35"/>
                  <br></br>

                  <label>State</label>
                  <input type="text" style={{width:400}} className="form-control" onChange={(state) => {this.carddetail.state = state.target.value}}  placeholder="State" size="35"/>

                  <br></br>
                  <label>Zip</label>
                  <input type="text" style={{width:400}} className="form-control" onChange={(zip) => {this.carddetail.zip = zip.target.value}}  placeholder="Zip" size="35"/>

                  <br></br>

                  <button onClick= {() => this.handleAdd(this.carddetail)} type="submit" className="btn btn-primary" style={{width:150}}>Add</button>

                </div>



            </div>
           );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addcarddetailsAPI:addcarddetailsAPI},dispatch);
}

export default connect(null,mapDispatchToProps)(AddPaymentDetailsForm);
