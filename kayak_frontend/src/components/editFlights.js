import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import EditFlightTile from './searchbars/editflight_tiles';
import AdminDashboardHeader from './headers/admin_dashboard_header';
import {handleFlightSearch} from './../api/adminAPI';
import './../images/flight.css';
import './../images/home.css';


class EditFlights extends Component {

  constructor(){
      super();
      this.searchflight ={}
    }

  flightSearch(data){
      console.log("this.searchflight.flight_id ",this.searchflight.flight_id );
      console.log("this.searchflight.carrier_name ",this.searchflight.carrier_name);
      if((this.searchflight.flight_id) || (this.searchflight.carrier_name)){
        this.props.handleFlightSearch(data);
      }else{
        alert("User need to provide either flight id  or carrier name");
      }

    }

  render() {
    console.log("It will display list of flights searched by the admin");
    return (
              <div>
              <div>
                <AdminDashboardHeader/>
              </div>

              <div className = "hotel-details-body">
                      <div style = {{marginLeft:420}}>
                          <input placeholder="Flight Id" id="flight_id" onChange={(flight_id) => {this.searchflight.flight_id = flight_id.target.value}}/>
                           <strong> OR  </strong>
                          <input placeholder="Carrier Name" id="carrier_name" onChange={(carrier_name) => {this.searchflight.carrier_name = carrier_name.target.value}}/>
                          <button style={{marginLeft:15}} onClick ={() => this.flightSearch(this.searchflight)} ><strong>Search</strong></button>
                      </div>
                    <div className ="hotel-details-body-left-nav">

                    </div>
                    <div className ="hotel-details-body-centre-admin">
                    {this.props.listOfSearchedFlights.map((flight)=>{
                        return (<EditFlightTile data={flight} style={{paddingTop:10}}/>)
                    })}
                    </div>
                    <div className ="hotel-details-body-right-nav">

                    </div>
              </div>

              </div>
           );
  }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({handleFlightSearch:handleFlightSearch},dispatch);
}

function mapStateToProps(state){
  console.log("Edit flights mapStateToProps: "+state.admin_reducer.listOfSearchedFlights);
  return{
      listOfSearchedFlights: state.admin_reducer.listOfSearchedFlights,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditFlights);
