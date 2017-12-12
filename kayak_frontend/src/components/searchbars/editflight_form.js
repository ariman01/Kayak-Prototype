import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';
import { connect } from 'react-redux';
import {handleFlightUpdate} from './../../api/adminAPI';
import {bindActionCreators} from 'redux';
import * as UTILValidation from './../../utils/validation';

class EditFlightForm extends Component {

  constructor(){
      super();
      this.flight_edit_data ={};
  }

  handleEdit(flightdetail) {
      console.log("Validating flight data edit form flightdetail",flightdetail);
      if(UTILValidation.emptyDate(flightdetail.carrier_name,"flight name") &&
         UTILValidation.emptyDate(flightdetail.departure_time,"deparature time")&&
         UTILValidation.numericValidation(flightdetail.flight_duration,"duration")&&
         UTILValidation.emptyDate(flightdetail.src_city,"src_city ")&&
         UTILValidation.checkValidCity(flightdetail.src_city) &&
         UTILValidation.emptyDate(flightdetail.destination_city,"destination_city ")&&
         UTILValidation.checkValidCity(flightdetail.destination_city) &&
         UTILValidation.numericValidation(flightdetail.price,"price ")){

         this.props.handleFlightUpdate(flightdetail);
      }
    }

  render() {
    this.flight_edit_data = this.props.current_flight_edit;
    return (
            <div className = "add-hotel-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-hotel-admin-body">
                  <h2>Edit Flight</h2>
                  <hr/>


                  <label>Flight Carrier</label>
                  <input type="text" style={{width:400}} className="form-control" id="carrier_name"  defaultValue={this.props.current_flight_edit.carrier_name} size="35"
                  onChange={(carrier_name) => {this.flight_edit_data.carrier_name = carrier_name.target.value}}/>
                  <br></br>
                  <label>Departure Time</label>
                  <input type="text" style={{width:400}} className="form-control" id="departure_time"  defaultValue={this.props.current_flight_edit.departure_time} size="35"
                  onChange={(departure_time) => {this.flight_edit_data.departure_time = departure_time.target.value}}/>
                  <br></br>
                  <label>Duration in minutes</label>
                  <input type="text" style={{width:400}} className="form-control" id="flight_duration"  defaultValue={this.props.current_flight_edit.flight_duration} size="35"
                  onChange={(flight_duration) => {this.flight_edit_data.flight_duration = flight_duration.target.value}}/>
                  <br></br>
                  <label>Source City</label>
                  <input type="text" style={{width:400}} className="form-control" id="src_city" defaultValue={this.props.current_flight_edit.src_city} size="35"
                  onChange={(src_city) => {this.flight_edit_data.src_city = src_city.target.value}}/>
                  <br></br>
                  <label>Destination City</label>
                  <input type="text" style={{width:400}} className="form-control" id="destination_city"  defaultValue={this.props.current_flight_edit.destination_city} size="35"
                  onChange={(destination_city) => {this.flight_edit_data.destination_city = destination_city.target.value}}/>
                  <br></br>

                  <label>Base price in $</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  defaultValue={this.props.current_flight_edit.price} size="35"
                  onChange={(price) => {this.flight_edit_data.price = price.target.value}}/>

                  <br></br>

                  <button onClick ={() => this.handleEdit(this.flight_edit_data)}  type="submit" className="btn btn-primary" style={{width:150}}>Edit</button>

                </div>



            </div>
           );
  }
}


function mapStateToProps(state) {
    console.log("maps to props  flight edit form :"+state.admin_reducer.current_flight_edit);
    return {
        current_flight_edit: state.admin_reducer.current_flight_edit,
    };

}

function mapDispatchToProps(dispatch) {
    console.log("updated car data : ",this.flight_edit_data );
    return bindActionCreators({handleFlightUpdate:handleFlightUpdate},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(EditFlightForm);
