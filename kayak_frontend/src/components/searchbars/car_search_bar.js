import React,{ Component } from 'react';
import clickIcon from './../../images/clickIcon.png';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchcars_action} from './../../actions/car_action';
import * as UTILValidation from './../../utils/validation';
import * as UTIL from './../../utils/util';

class CarSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardetails: {
                src_city: '',
                destination_city: '',
                start_date: '',
                end_date: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        const { cardetails } = this.state;
        this.setState({
            cardetails: {
                ...cardetails,
                [name]: value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { cardetails } = this.state;
        console.log("Validating car inputs");
        if(UTILValidation.emptyDate(cardetails.src_city,"source city") &&
           UTILValidation.checkValidCity(cardetails.src_city)&&
           (!cardetails.destination_city || UTILValidation.checkValidCity(cardetails.destination_city))&&
           UTILValidation.emptyDate(cardetails.start_date,"start date") &&
           UTILValidation.emptyDate(cardetails.end_date,"end date") &&
           UTILValidation.validateStartEndDate(cardetails.start_date,cardetails.end_date)){
           if(UTIL.getUserDetails()){
             cardetails.user_id = UTIL.getUserDetails();
           }
           this.props.searchcars_action(cardetails);
        }
      }
  render() {
      const { cardetails } = this.state;
    return (
              <div className="container-fluid" style = {{height:250}}>

                  <div className = "container-fluid "
                  style = {{height:200,backgroundColor:"#f1f1f1", marginLeft:"8%", marginRight:"12%"}}>

                  <div className="container-fluid pull-left" style={{fontSize:13,paddingTop:30,paddingLeft:30}}>
                      <a style={{color:"black",fontWeight:"bold"}}>SAME DROP-OFF</a>
                      <a style={{paddingLeft:35,color:"black",fontWeight:"bold"}}>DIFFERENT DROP-OFF</a>
                  </div>
                      <div className="form-group" style={{marginTop:"6%"}} >
                          <input type="text"  className="TextField col-sm-3 col-md-3 col-lg-3" id="srclocation"
                          placeholder="Where" name="src_city" value={cardetails.src_city} style={{marginLeft:2,height:70,fontSize:17}} onChange={this.handleChange}/>
                          <input type="text"  className="TextField col-sm-3 col-md-3 col-lg-3" id="deslocation"
                          placeholder="To" name="destination_city" value={cardetails.destination_city} style={{marginLeft:2,height:70, fontSize:17}} onChange={this.handleChange}/>
                          <input type="date"  className="TextField col-sm-2 col-md-3 col-lg-3" id="startdate"
                          placeholder="Start Date" name="start_date" value={cardetails.start_date} style={{marginLeft:2,height:70, fontSize:17}} onChange={this.handleChange}/>
                          <input type="date"  className="TextField col-sm-2 col-md-2 col-lg-2" id="enddate"
                          placeholder="End Date" name="end_date" value={cardetails.end_date} style={{marginLeft:2,height:70, fontSize:17}} onChange={this.handleChange}/>
                      </div>
                      <img src={clickIcon}  alt="Submit" style={{height:70}} onClick={this.handleSubmit}/>
                  </div>
              </div>
           );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchcars_action:searchcars_action},dispatch);
}

export default connect(null,mapDispatchToProps)(CarSearchBar);
