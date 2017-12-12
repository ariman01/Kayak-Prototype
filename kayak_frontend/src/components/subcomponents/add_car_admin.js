import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './../../images/admin.css';
import {addCarAdmin} from './../../api/adminAPI';
import * as UTILValidation from './../../utils/validation';

class AddCarAdmin extends Component {
  constructor(){
    super();
    this.cardetail ={}
  }

  handleSubmit(cardetail) {
      console.log("Validating add car inputs at admin dashboard");
      if(UTILValidation.emptyDate(cardetail.model_no,"model_no") &&
         UTILValidation.emptyDate(cardetail.name,"car_name") &&
         UTILValidation.emptyDate(cardetail.capacity,"capacity") &&
         UTILValidation.numericValidation(cardetail.capacity,"capacity")&&
         UTILValidation.emptyDate(cardetail.no_of_doors,"no_of_door") &&
         UTILValidation.numericValidation(cardetail.no_of_doors,"no_of_door") &&
         UTILValidation.emptyDate(cardetail.no_of_bags,"no_of_bags") &&
         UTILValidation.numericValidation(cardetail.no_of_bags,"no_of_bags") &&
         UTILValidation.emptyDate(cardetail.price,"price") &&
         UTILValidation.numericValidation(cardetail.price,"price") &&
         UTILValidation.emptyDate(cardetail.src_city,"src_city") &&
         UTILValidation.checkValidCity(cardetail.src_city) &&
         UTILValidation.emptyDate(cardetail.destination_city,"destination") &&
         UTILValidation.checkValidCity(cardetail.destination_city) &&
         UTILValidation.emptyDate(cardetail.rental_agency,"rental agency") &&
         UTILValidation.emptyDate(cardetail.car_type,"car type")){

         this.props.addCarAdmin(cardetail);
      }
    }


  render() {
    return (
            <div className = "add-car-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-car-admin-body">
                  <h2>Add Car</h2>
                  <hr/>

                  <label>Car Model</label>
                  <input type="text" style={{width:400}} className="form-control" id="car_model"  placeholder="Enter car model" size="35"
                  onChange={(car_model) => {this.cardetail.model_no = car_model.target.value}}/>
                  <br></br>
                  <label>Car Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="car_name"  placeholder="Enter car name" size="35"
                  onChange={(car_name) => {this.cardetail.name = car_name.target.value}}/>
                  <br></br>
                  <label>Capacity</label>
                  <input type="text" style={{width:400}} className="form-control" id="capacity"  placeholder="Enter capacity" size="35"
                  onChange={(capacity) => {this.cardetail.capacity = capacity.target.value}}/>
                  <br></br>
                  <label>No. of doors</label>
                  <input type="text" style={{width:400}} className="form-control" id="no_of_doors"  placeholder="Enter the number of doors" size="35"
                  onChange={(no_of_doors) => {this.cardetail.no_of_doors = no_of_doors.target.value}}/>
                  <br></br>
                  <label>No. of Bags</label>
                  <input type="text" style={{width:400}} className="form-control" id="no_of_bags"  placeholder="Enter the number of bags" size="35"
                  onChange={(no_of_bags) => {this.cardetail.no_of_bags = no_of_bags.target.value}}/>
                  <br></br>
                  <label>Base price</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the price" size="35"
                  onChange={(price) => {this.cardetail.price = price.target.value}}/>
                  <br></br>
                  <label>Enter the source city</label>
                  <input type="text" style={{width:400}} className="form-control" id="src_city"  placeholder="Enter the cource city" size="35"
                  onChange={(src_city) => {this.cardetail.src_city = src_city.target.value}}/>
                  <br></br>
                  <label>Enter the destination city</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the destination city" size="35"
                  onChange={(destination_city) => {this.cardetail.destination_city = destination_city.target.value}}/>
                  <br></br>
                  <label>Select the rental agency</label>
                  <div className="form-group">
                    <select className="form-control" id="rental_agency"  style={{width:400}}
                    onChange={(rental_agency) => {this.cardetail.rental_agency = rental_agency.target.value}}>
                      <option>Select an agency</option>
                      <option>Advantage</option>
                      <option>Alamo</option>
                      <option>Avis</option>
                      <option>Budget</option>
                      <option>Dollar</option>
                      <option>Enterprise</option>
                      <option>Fox</option>
                      <option>Hertz</option>
                      <option>National</option>
                      <option>Sixt</option>
                      <option>Fox</option>
                      <option>Special rate</option>
                      <option>Thrifty</option>
                      <option>TravelCar</option>
                    </select>
                  </div>

                  <label>Select the car type</label>
                  <div className="form-group">
                    <select className="form-control" id="car_type"  style={{width:400}}
                    onChange={(car_type) => {this.cardetail.car_type = car_type.target.value}}>
                      <option>Select car type</option>
                      <option>Small</option>
                      <option>Large</option>
                      <option>Medium</option>
                      <option>SUV</option>
                      <option>Luxury</option>
                      <option>Van</option>
                      <option>Convertible</option>
                      <option>Pickup truck</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{width:150}}
                  onClick={() => this.handleSubmit(this.cardetail)}>Add</button>

                </div>

            </div>
           );
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({addCarAdmin:addCarAdmin},dispatch);
}

export default connect(null,mapDispatchToProps)(AddCarAdmin);
