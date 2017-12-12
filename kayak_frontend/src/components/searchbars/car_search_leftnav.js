import React,{ Component } from 'react';
import './../../images/home.css';
import CustomCheckbox from './../subcomponents/custom/custom_checkbox';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CarSearchLeftNav extends Component{

getCapacityCheckbox(checkboxes, catagory, prop_catagory){
  return Object.keys(checkboxes).map((each_checkbox)=> {
    return <CustomCheckbox data={{type:catagory,prop_cat:prop_catagory,prop_name:each_checkbox,prop_value:checkboxes[each_checkbox]}}/>}
  );

}
  render() {
    console.log("Search leftnav Bar Page Render",this.props.leftNavCarConfig);
    return (
      <div  style={{margin:12}}>
          <div className="car-left-nav-capacity">
            <h4> Capacity</h4>
            {this.getCapacityCheckbox(this.props.leftNavCarConfig.capacity, "car","capacity")}
            <hr/>
          </div>


          <div className="car-left-nav-bags" >
            <h4> No of Bags</h4>
            {this.getCapacityCheckbox(this.props.leftNavCarConfig.bags, "car","bags")}
            <hr/>
          </div>


          <div className="car-left-nav-cartype"   >
            <h4> Car Type</h4>
            {this.getCapacityCheckbox(this.props.leftNavCarConfig.cartype, "car","cartype")}
            <hr/>
          </div>


          <div className="car-left-nav-rentalagency"   >
            <h4> Rental Agency</h4>
            {this.getCapacityCheckbox(this.props.leftNavCarConfig.rentalagency, "car","rentalagency")}
            <hr/>
          </div>
      </div>

          );
  }
}

function mapStateToProps(state) {
    console.log("mapStateToProps car-left-nav 1111",state.cardetails_reducer.leftNavCarConfig);
      return {
          leftNavCarConfig : state.cardetails_reducer.leftNavCarConfig
      };
  }

export default connect(mapStateToProps)(CarSearchLeftNav);
