import React,{ Component } from 'react';
import CustomCheckbox from './../subcomponents/custom/custom_checkbox';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setHotelConfig} from './../../actions/hotel_action';

class HotelSearchLeftNav extends Component{

getCapacityCheckbox(checkboxes, catagory, prop_catagory){
  return Object.keys(checkboxes).map((each_checkbox)=> {
    return <CustomCheckbox data={{type:catagory,prop_cat:prop_catagory,prop_name:each_checkbox,prop_value:checkboxes[each_checkbox]}}/>}
  );
}


handlePriceSlide(slidevalue){
  console.log("slidevalue:",slidevalue);
  let config = Object.assign({},this.props.leftHotelNavConfig);
  config.price = slidevalue;
  this.props.setHotelConfig(config);
}
  render() {
    console.log("Search leftnav Bar Page Render",this.props.leftHotelNavConfig);
    return (
      <div  style={{margin:12}}>

          <div className="hotel-left-nav-price" >
            <p> Price: ${this.props.leftHotelNavConfig.price} </p>
            <input type="range" min="10" max="1000" defaultValue={this.props.leftHotelNavConfig.price}
            onChange={(slidevalue)=>{this.handlePriceSlide(slidevalue.target.value)}}/>
          </div>

          <div className="hotel-left-nav-stars"   >
            <hr/>
            <p> Stars</p>
            {this.getCapacityCheckbox(this.props.leftHotelNavConfig.stars, "hotel","stars")}
            <hr/>
          </div>
      </div>

          );
  }
}



function mapStateToProps(state) {
    console.log("mapStateToProps hotel left nav",state.hoteldetails_reducer.leftHotelNavConfig);
      return {
          leftHotelNavConfig:state.hoteldetails_reducer.leftHotelNavConfig
      };
  }

function matchDispatchToProps(dispatch){
        return bindActionCreators({setHotelConfig:setHotelConfig}, dispatch);
    }

export default connect(mapStateToProps,matchDispatchToProps)(HotelSearchLeftNav);
