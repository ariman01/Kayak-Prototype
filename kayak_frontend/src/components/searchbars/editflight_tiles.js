import React,{ Component } from 'react';
import './../../images/flight.css';
import * as Images from './../../utils/images';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminActions from './../../actions/admin_action';
import {adminflightDelete} from './../../api/adminAPI';
import {history} from "../../utils/util";

class EditFlightTile extends Component {

  handleEdit(){
    console.log("Flight edit:",this.props.data);
    this.props.editFlightAdmin(this.props.data);
    history.push('/editflightform');
  }

  render() {
    console.log("Search leftnav Bar Page");
    return (
      <div className="flight-tile">

          <div className="flight-tile1">
            <div className="flight-tile-div">
            <img src={Images.retrieveImages(this.props.data.carrier_name)} />
            </div>
            <div className="flight-tile-div">
            {this.props.data.departure_time}<br/>
            {this.props.data.src_city}
            </div>
            <div className="flight-tile-div">
              <span style ={{color:"grey",bold:true}}>{this.props.data.flight_duration}hrs<br/>____________ <br/> non-stop</span>
            </div>
            <div className="flight-tile-div">
            <br/>
            {this.props.data.destination_city}
            </div>
            <div className="flight-tile-div">
              <span style={{marginLeft:"30%"}}></span>
            </div>

          </div>
          <div className="flight-tile2">
              <strong style={{marginLeft:48,fontSize:25,color:"black",marginTop:20}}>${this.props.data.price}</strong>
              <h4 style={{marginLeft:50}}>Total</h4>
              <button onClick ={() => this.handleEdit()} style={{width:"80%",marginTop:"2%"}}><strong>Edit</strong></button>
              <button  onClick ={() => this.props.adminflightDelete({flight_id:this.props.data.flight_id},this.props.latest_admin_search_parameter)} style={{width:"80%",marginTop:"2%"}}><strong>Delete</strong></button>
          </div>
      </div>
          );
  }
}
function mapStateToProps(state) {
  console.log("mapStateToProps: edit flight tiles",state.flightdetails_reducer.latest_admin_search_parameter);
    return {
        latest_admin_search_parameter: state.flightdetails_reducer.latest_admin_search_parameter,
    };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({editFlightAdmin:adminActions.editFlightAdmin,adminflightDelete:adminflightDelete},dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(EditFlightTile);
