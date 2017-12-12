import React,{ Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setCarConfig} from './../../../actions/car_action';
import {setFlightConfig} from './../../../actions/flight_action';
import {setHotelConfig} from './../../../actions/hotel_action';

class CustomCheckbox extends Component {

  constructor(){
    super();
  }
  toggleCheckbox(checkbox) {
      console.log("checkbox.leftNavCarConfig: ",this.props.leftNavCarConfig);
      console.log("checkbox.checked: ",this.props.data);

      if(this.props.data.type ==="car"){
        let config = Object.assign({},this.props.leftNavCarConfig);
        config[this.props.data.prop_cat][this.props.data.prop_name] = !this.props.data.prop_value;
        console.log("CustomCheckBox car config: ",config);
        this.props.setconfig(config);
      }else if(this.props.data.type === "flight"){
        let config = Object.assign({},this.props.leftFlightNavConfig);
        config[this.props.data.prop_cat][this.props.data.prop_name] = !this.props.data.prop_value;
        console.log("CustomCheckBox flight config: ",config);
        this.props.setFlightConfig(config);
      }else if(this.props.data.type ==="hotel"){
        let config = Object.assign({},this.props.leftHotelNavConfig);
        config[this.props.data.prop_cat][this.props.data.prop_name] = !this.props.data.prop_value;
        console.log("CustomCheckBox hotel config: ",config);
        this.props.setHotelConfig(config);
      }

  }

  getNoofStars(number){
    console.log("number",number);
    var starArray = new Array(Number(number));
    starArray.fill(1);
    return starArray.map((x)=>{
        console.log("hey");
        return <span className="glyphicon glyphicon-star" style={{color:"#FF7F50"}}></span>
    });
  }
  render() {
    console.log("CustomCheckBox render page",this.props.data);

    return  (
          <div >
              <input type="checkbox" className="custom-checkbox"  checked={this.props.data.prop_value}
              onClick={() => this.toggleCheckbox(this)}/>
              <span>{(this.props.data.type==="hotel")?this.getNoofStars(this.props.data.prop_name):this.props.data.prop_name}</span>

          </div>
          );
  }
}

function mapStateToProps(state) {
    console.log("mapStateToProps left-nav",state.cardetails_reducer.leftNavCarConfig);
      return {
          leftNavCarConfig : state.cardetails_reducer.leftNavCarConfig,
          leftFlightNavConfig:state.flightdetails_reducer.leftFlightNavConfig,
          leftHotelNavConfig:state.hoteldetails_reducer.leftHotelNavConfig
      };
  }

function matchDispatchToProps(dispatch){
      return bindActionCreators({setconfig:setCarConfig,
                                 setFlightConfig:setFlightConfig,
                                 setHotelConfig:setHotelConfig}, dispatch);
  }

export default connect(mapStateToProps, matchDispatchToProps)(CustomCheckbox);
