import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './../../images/admin.css';
import {handleCarUpdate} from './../../api/adminAPI';
import * as UTILValidation from './../../utils/validation';


class EditCarForm extends Component {

constructor(){
    super();
    this.car_edit_data ={};
  }

  handleSubmit(cardetail,latestAdminSerachParam) {
      console.log("Validating edit car inputs at admin dashboard",cardetail);
      if(
         UTILValidation.emptyDate(cardetail.name,"car_name") &&
         UTILValidation.numericValidation(cardetail.capacity,"capacity")&&
         UTILValidation.numericValidation(cardetail.no_of_bags,"no_of_bags") &&
         UTILValidation.numericValidation(cardetail.no_of_doors,"no_of_door") &&

         UTILValidation.emptyDate(cardetail.src_city,"src_city") &&
         UTILValidation.checkValidCity(cardetail.src_city) &&
         UTILValidation.emptyDate(cardetail.destination_city,"destination") &&
         UTILValidation.checkValidCity(cardetail.destination_city) &&
         UTILValidation.emptyDate(cardetail.rental_agency,"rental agency")&&
         UTILValidation.numericValidation(cardetail.price,"price")
         ){

         this.props.handleCarUpdate(cardetail,latestAdminSerachParam);
      }
    }


  render() {
    this.car_edit_data = this.props.current_car_edit;
    return (
            <div className = "add-hotel-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-hotel-admin-body">
                  <h2>Edit Car</h2>
                  <hr/>


                  <label>Car Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="name"  defaultValue={this.props.current_car_edit.name} size="35"
                  onChange={(name) => {this.car_edit_data.name = name.target.value}}/>
                  <br></br>
                  <label>Car Capacity</label>
                  <input type="text" style={{width:400}} className="form-control" id="capacity"  defaultValue={this.props.current_car_edit.capacity} size="35"
                  onChange={(capacity) => {this.car_edit_data.capacity = capacity.target.value}}/>
                  <br></br>
                  <label>Number of Bags</label>
                  <input type="text" style={{width:400}} className="form-control" id="no_of_bags"  defaultValue={this.props.current_car_edit.no_of_bags} size="35"
                  onChange={(no_of_bags) => {this.car_edit_data.no_of_bags = no_of_bags.target.value}}/>
                  <br></br>

                  <label>Number of Doors</label>
                  <input type="text" style={{width:400}} className="form-control" id="no_of_doors"  defaultValue={this.props.current_car_edit.no_of_doors}size="35"
                  onChange={(no_of_doors) => {this.car_edit_data.no_of_doors = no_of_doors.target.value}}/>
                  <br></br>
                  <label>Source City</label>
                  <input type="text" style={{width:400}} className="form-control" id="src_city"  defaultValue={this.props.current_car_edit.src_city} size="35"
                  onChange={(src_city) => {this.car_edit_data.src_city = src_city.target.value}}/>
                  <br></br>
                  <label>Destination City</label>
                  <input type="text" style={{width:400}} className="form-control" id="destination_city"  defaultValue={this.props.current_car_edit.destination_city} size="35"
                  onChange={(destination_city) => {this.car_edit_data.destination_city = destination_city.target.value}}/>
                  <br></br>

                  <label>Rental Agency</label>
                  <input type="text" style={{width:400}} className="form-control" id="rental_agency"  defaultValue={this.props.current_car_edit.rental_agency} size="35"
                  onChange={(rental_agency) => {this.car_edit_data.rental_agency = rental_agency.target.value}}/>

                  <br></br>
                  <label>Car base price in $</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  defaultValue={this.props.current_car_edit.price} size="35"
                  onChange={(price) => {this.car_edit_data.price = price.target.value}}/>

                  <br></br>

                  <button onClick ={() => this.handleSubmit(this.car_edit_data,this.props.latest_admin_search_parameter)}  type="submit" className="btn btn-primary" style={{width:150}}>Edit</button>

                </div>



            </div>
           );
  }
}


function mapStateToProps(state) {
    console.log("maps to props  car edit form :"+state.admin_reducer.current_car_edit);
    return {
        current_car_edit: state.admin_reducer.current_car_edit,
        latest_admin_search_parameter: state.cardetails_reducer.latest_admin_search_parameter
    };

}

function mapDispatchToProps(dispatch) {
    console.log("updated car data : ",this.car_edit_data );
    return bindActionCreators({handleCarUpdate:handleCarUpdate},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(EditCarForm);
