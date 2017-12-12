import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addHotelAdmin} from './../../api/adminAPI';
import './../../images/admin.css';
import * as UTILValidation from './../../utils/validation';


class AddHotelAdmin extends Component {

  constructor(){
    super();
    this.hoteldetail ={}
  }

  handleSubmit(hoteldetail) {
      console.log("Validating add car inputs at admin dashboard");
      if(UTILValidation.emptyDate(hoteldetail.hotel_id,"hotel id") &&
         UTILValidation.emptyDate(hoteldetail.hotel_name,"hotel name") &&
         UTILValidation.emptyDate(hoteldetail.hotel_address,"hotel address") &&
         UTILValidation.emptyDate(hoteldetail.hotel_city,"hotel city") &&
         UTILValidation.checkValidCity(hoteldetail.hotel_city)&&
         UTILValidation.emptyDate(hoteldetail.hotel_state,"state") &&
         UTILValidation.checkValidState(hoteldetail.hotel_state) &&
         UTILValidation.emptyDate(hoteldetail.hotel_zip,"hotel zip") &&
         UTILValidation.validatePinCode(hoteldetail.hotel_zip,"hotel zip") &&
         UTILValidation.emptyDate(hoteldetail.hotel_stars,"hotel stars") &&
         UTILValidation.numericValidation(hoteldetail.hotel_stars,"hotel stars") &&
         UTILValidation.emptyDate(hoteldetail.hotel_rating,"hotel rating") &&
         UTILValidation.numericValidation(hoteldetail.hotel_rating,"hotel rating")&&
         UTILValidation.emptyDate(hoteldetail.hotel_capacity,"hotel capacity")&&
         UTILValidation.numericValidation(hoteldetail.hotel_capacity,"hotel capacity")&&
         UTILValidation.emptyDate(hoteldetail.hotel_price,"hotel price")&&
         UTILValidation.numericValidation(hoteldetail.hotel_price,"hotel price")){

         this.props.addHotelAdmin(hoteldetail);
      }
    }


  render() {
    return (
            <div className = "add-hotel-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-hotel-admin-body">
                  <h2>Add Hotel</h2>
                  <hr/>

                  <label>Hotel id</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_id"  placeholder="Enter hotel id" size="35" onChange={(hotel_id) => {this.hoteldetail.hotel_id = hotel_id.target.value}}/>
                  <br></br>
                  <label>Hotel name</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_name"  placeholder="Enter hotel name" size="35" onChange={(hotel_name) => {this.hoteldetail.hotel_name = hotel_name.target.value}}/>
                  <br></br>
                  <label>Hotel address</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_address"  placeholder="Enter the hotel address" size="35" onChange={(hotel_address) => {this.hoteldetail.hotel_address = hotel_address.target.value}}/>
                  <br></br>
                  <label>Hotel city</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_city"  placeholder="Enter the hotel city" size="35" onChange={(hotel_city) => {this.hoteldetail.hotel_city = hotel_city.target.value}}/>
                  <br></br>
                  <label>Hotel state</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_state"  placeholder="Enter the hotel state" size="35" onChange={(hotel_state) => {this.hoteldetail.hotel_state = hotel_state.target.value}}/>
                  <br></br>
                  <label>Hotel zip</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_zip"  placeholder="Enter the hotel zip" size="35" onChange={(hotel_zip) => {this.hoteldetail.hotel_zip = hotel_zip.target.value}}/>
                  <br></br>
                  <label>Hotel stars</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_stars"  placeholder="Enter the hotel stars" size="35" onChange={(hotel_stars) => {this.hoteldetail.hotel_stars = hotel_stars.target.value}}/>
                  <br></br>
                  <label>Hotel room types</label>
                  <div className="form-group">
                    <select multiple className="form-control" id="hotel_room_type"  style={{width:400}}
                    onChange={(hotel_room_type) => {this.hoteldetail.hotel_room_type = hotel_room_type.target.value}}>
                      <option>Suite</option>
                      <option>Sudio apartment</option>
                      <option>Cabana</option>
                      <option>Family room</option>
                      <option>Presidential suite</option>
                      <option>Single</option>
                      <option>Double</option>
                      <option>Queen</option>
                      <option>King</option>
                    </select>
                  </div>

                  <br></br>
                  <label>Hotel rating</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_rating"  placeholder="Enter the hotel rating" size="35" onChange={(hotel_rating) => {this.hoteldetail.hotel_rating = hotel_rating.target.value}}/>

                  <br></br>
                  <label>Hotel capacity</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_capacity"  placeholder="Enter the hotel capacity" size="35" onChange={(hotel_capacity) => {this.hoteldetail.hotel_capacity = hotel_capacity.target.value}}/>

                  <br></br>
                  <label>Hotel base price</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_price"  placeholder="Enter the base price of hotel" size="35" onChange={(hotel_price) => {this.hoteldetail.hotel_price = hotel_price.target.value}}/>

                  <br></br>

                  <button type="submit" className="btn btn-primary" style={{width:150}}
                  onClick={()=>{this.handleSubmit(this.hoteldetail)}}>Add</button>

                </div>



            </div>
           );
  }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({addHotelAdmin:addHotelAdmin},dispatch);
}

export default connect(null,mapDispatchToProps)(AddHotelAdmin);
