import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {editcarddetailsAPI} from './../../api/userAPI';
import HomePageHeader1 from './../headers/homepage_header1';
class EditPaymentDetailsForm extends Component {
  constructor() {
      super();
      this.card_edit_data = {};
  }

  handleSubmit(){
  console.log("Clicked Edit Hotel");
  }
  render() {
    this.card_edit_data = this.props.carddetails;
    return (
            <div className = "add-hotel-admin">
            <div className="user-profile-header">
              <HomePageHeader1/>
            </div>

                <div className = "add-hotel-admin-body">
                  <h2>Edit Payment detail</h2>
                  <hr/>
                  <label>Name on Card</label>
                  <input type="text" style={{width:400}} className="form-control" defaultValue={this.props.carddetails.name_on_card} size="35"
                         onChange={(name_on_card) => {this.card_edit_data.name_on_card = name_on_card.target.value}}/>
                  <br></br>
                  <label>Card Number(last 4 digits)</label>
                  <input type="text" style={{width:400}} className="form-control" defaultValue={this.props.carddetails.card_number} size="35"
                         onChange={(card_number) => {this.card_edit_data.card_number = card_number.target.value}}/>
                  <br></br>
                  <label>Card Type</label>
                  <input type="text" style={{width:400}} className="form-control" defaultValue={this.props.carddetails.card_type} size="35"
                         onChange={(card_type) => {this.card_edit_data.card_type = card_type.target.value}}/>
                  <br></br>
                  <label>Address</label>
                  <input type="text" style={{width:400}} className="form-control" defaultValue={this.props.carddetails.address} size="35"
                         onChange={(address) => {this.card_edit_data.address = address.target.value}}/>
                  <br></br>
                  <label>City</label>
                  <input type="text" style={{width:400}} className="form-control" defaultValue={this.props.carddetails.city} size="35"
                         onChange={(city) => {this.card_edit_data.city = city.target.value}}/>
                  <br></br>

                  <label>State</label>
                  <input type="text" style={{width:400}} className="form-control" defaultValue={this.props.carddetails.state} size="35"
                         onChange={(state) => {this.card_edit_data.state = state.target.value}}/>

                  <br></br>
                  <label>Zip</label>
                  <input type="text" style={{width:400}} className="form-control" defaultValue={this.props.carddetails.zip} size="35"
                         onChange={(zip) => {this.card_edit_data.zip = zip.target.value}}/>

                  <br></br>

                  <button onClick ={() => this.props.editcarddetailsAPI(this.card_edit_data)} type="submit" className="btn btn-primary" style={{width:150}}>Submit</button>

                </div>



            </div>
           );
  }
}
function mapStateToProps(state) {
    console.log("edit preference pageuserdetails",state.users.carddetails);
    return  {
        carddetails: state.users.carddetails[0]
    }
  
}

function mapDispatchToProps(dispatch) {
    console.log("its before action in editpref"+this.card_edit_data);
    return bindActionCreators({editcarddetailsAPI:editcarddetailsAPI},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(EditPaymentDetailsForm);
