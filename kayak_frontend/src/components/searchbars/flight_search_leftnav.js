import React,{ Component } from 'react';
import CustomCheckbox from './../subcomponents/custom/custom_checkbox';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setFlightConfig} from './../../actions/flight_action';

class FlightSearchLeftNav extends Component{

getCapacityCheckbox(checkboxes, catagory, prop_catagory){
  return Object.keys(checkboxes).map((each_checkbox)=> {
    return <CustomCheckbox data={{type:catagory,prop_cat:prop_catagory,prop_name:each_checkbox,prop_value:checkboxes[each_checkbox]}}/>}
  );
}

handleDurationSlide(slidevalue){
  console.log("slidevalue:",slidevalue);
  let config = Object.assign({},this.props.leftFlightNavConfig);
  config.duration = slidevalue;
  this.props.setFlightConfig(config);
}
handlePriceSlide(slidevalue){
  console.log("slidevalue:",slidevalue);
  let config = Object.assign({},this.props.leftFlightNavConfig);
  config.price = slidevalue;
  this.props.setFlightConfig(config);
}
  render() {
    console.log("Search leftnav Bar Page Render",this.props.leftFlightNavConfig);
    return (
      <div  style={{margin:12}}>
          <div className="flight-left-nav-duration">
            <p> Duration: {this.props.leftFlightNavConfig.duration} hours</p>
            <input type="range" min="1" max="20" defaultValue={this.props.leftFlightNavConfig.duration}
            onChange={(slidevalue)=>{this.handleDurationSlide(slidevalue.target.value)}}/>
            <hr/>
          </div>


          <div className="flight-left-nav-price" >
            <p> Price: ${this.props.leftFlightNavConfig.price} </p>
            <input type="range" min="10" max="1000" defaultValue={this.props.leftFlightNavConfig.price}
            onChange={(slidevalue)=>{this.handlePriceSlide(slidevalue.target.value)}}/>
          </div>

          <div className="car-left-nav-rentalagency"   >
            <hr/>
            <p> Carriers</p>
            {this.getCapacityCheckbox(this.props.leftFlightNavConfig.carriers, "flight","carriers")}
            <hr/>
          </div>
      </div>

          );
  }
}



function mapStateToProps(state) {
    console.log("mapStateToProps flight left nav",state.flightdetails_reducer.leftFlightNavConfig);
      return {
          leftFlightNavConfig : state.flightdetails_reducer.leftFlightNavConfig
      };
  }

function matchDispatchToProps(dispatch){
        return bindActionCreators({setFlightConfig:setFlightConfig}, dispatch);
    }

export default connect(mapStateToProps,matchDispatchToProps)(FlightSearchLeftNav);
