import React,{ Component } from 'react';
import clickIcon from './../../images/clickIcon.png';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import DatePicker from 'material-ui/DatePicker';
import {searchflights_action} from './../../actions/flight_action';
import * as UTILValidation from './../../utils/validation';
import * as UTIL from './../../utils/util';

class FlightSearchBar extends Component {
    constructor(props) {
        super(props);
        this.flightdetails= {}
    };

    handleSubmit() {
        console.log("Flight serach bar handleSubmit flightdetails:",this.flightdetails);
        console.log("Validating car inputs");
        if(UTILValidation.emptyDate(this.flightdetails.src_city,"source city") &&
           UTILValidation.checkValidCity(this.flightdetails.src_city) &&
           UTILValidation.emptyDate(this.flightdetails.destination_city,"destination city") &&
           UTILValidation.checkValidCity(this.flightdetails.destination_city) &&
           UTILValidation.emptyDate(this.flightdetails.start_date,"start date") &&
           UTILValidation.emptyDate(this.flightdetails.end_date,"end date") &&
           UTILValidation.emptyDate(this.flightdetails.persons,"no of adults") &&
           UTILValidation.validateStartEndDate(this.flightdetails.start_date,this.flightdetails.end_date)){
           if(UTIL.getUserDetails()){
               this.flightdetails.user_id = UTIL.getUserDetails();
           }
           this.props.searchflights_action(this.flightdetails);
        }

    }

  render() {
    console.log("Search CarSearch Bar Page");
    return (
              <div className="container-fluid" style = {{height:250}}>

                  <div className = "container-fluid "
                  style = {{height:200,backgroundColor:"#f1f1f1", marginLeft:"8%", marginRight:"12%"}}>

                  <div className="container-fluid pull-left" style={{fontSize:13,paddingTop:30,paddingLeft:30}}>
                  <a style={{color:"black",fontWeight:"bold"}}>ROUND-TRIP</a>
                  <a style={{paddingLeft:35,color:"black",fontWeight:"bold"}}>ONE-WAY</a>
                  </div>
                      <div className="form-group" style={{marginTop:"6%"}}>
                          <input type="text"  className="TextField col-sm-2 col-md-2 col-lg-2" id="srclocation"
                          placeholder="From where?" name="src_city" style={{marginLeft:2,height:70,fontSize:17}}
                           onChange={(eventvalue)=>{this.flightdetails.src_city = eventvalue.target.value}}/>
                          <input type="text"  className="TextField col-sm-2 col-md-2 col-lg-2" id="deslocation"
                          placeholder="To where?" name="destination_city"  style={{marginLeft:2,height:70, fontSize:17}}
                           onChange={(eventvalue)=>{this.flightdetails.destination_city = eventvalue.target.value}}/>
                          <input type="date"  className="TextField col-sm-2 col-md-2 col-lg-2" id="depart"
                          placeholder="Depart" name="start_date"  style={{marginLeft:2,height:70, fontSize:17}}
                            onChange={(eventvalue)=>{this.flightdetails.start_date = eventvalue.target.value}}/>
                          <input type="date"  className="TextField col-sm-2 col-md-2 col-lg-2" id="return"
                          placeholder="Return" name="end_date"  style={{marginLeft:2,height:70, fontSize:17}}
                           onChange={(eventvalue)=>{this.flightdetails.end_date = eventvalue.target.value}}/>

                          <select className="TextField col-sm-3 col-md-3 col-lg-3" id="noOfAdults" name="adults"
                           style={{marginLeft:2,height:70, fontSize:17}}
                           onChange={(eventvalue)=>{this.flightdetails.persons = eventvalue.target.value}}>
                              <option selected="selected">Adults</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                          </select>
                      </div>
                      <input type="image" src={clickIcon} style={{height:70}} onClick={()=>{this.handleSubmit()}}/>
                  </div>
              </div>
           );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchflights_action:searchflights_action},dispatch);
}
export default connect(null,mapDispatchToProps)(FlightSearchBar);
