import React,{ Component } from 'react';
import clickIcon from './../../images/clickIcon.png';
import DatePicker from 'material-ui/DatePicker';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchhotels_action} from './../../actions/hotel_action';
import * as UTILValidation from './../../utils/validation';
import * as UTIL from './../../utils/util';

class HotelSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoteldetails: {
                hotel_city: '',
                start_date: '',
                end_date:   '',
                capacity:''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        const { hoteldetails } = this.state;
        this.setState({
            hoteldetails: {
                ...hoteldetails,
                [name]: value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const {hoteldetails } = this.state;
        const { dispatch } = this.props;
        console.log("its capacity"+hoteldetails.capacity);
        if(UTILValidation.emptyDate(hoteldetails.src_city,"source city") &&
           UTILValidation.checkValidCity(hoteldetails.src_city) &&
           UTILValidation.emptyDate(hoteldetails.start_date,"start date") &&
           UTILValidation.emptyDate(hoteldetails.end_date,"end date") &&
           UTILValidation.emptyDate(hoteldetails.capacity,"no of guests") &&
           UTILValidation.validateStartEndDate(hoteldetails.start_date,hoteldetails.end_date)){
           if(UTIL.getUserDetails()){
               hoteldetails.user_id = UTIL.getUserDetails();
           }
           this.props.searchhotels_action(hoteldetails);
        }

    }

  render() {
      const { hoteldetails } = this.state;
    const options = [
      'one', 'two', 'three'
  ]
    console.log("Search CarSearch Bar Page");
    return (
              <div className="container-fluid" style = {{height:250}}>

                  <div className = "container-fluid "
                  style = {{height:200,backgroundColor:"#f1f1f1", marginLeft:"8%", marginRight:"12%"}}>

                  <div className="container-fluid pull-left" style={{fontSize:13,paddingTop:30,paddingLeft:30}}>
                  </div>
                      <div className="form-group" style={{marginTop:"6%"}}>
                      <input type="text"  className="TextField col-sm-3 col-md-3 col-lg-3" id="location"
                      placeholder="Where" name="src_city"  style={{marginLeft:2,height:70,fontSize:17}} onChange={this.handleChange}/>
                          <input type="date"  className="TextField col-sm-3 col-md-3 col-lg-3" id="checkInDate" name="start_date"
                          placeholder="Check-in" style={{marginLeft:2,height:70, fontSize:17}} onChange={this.handleChange}/>

                          <input type="date"  className="TextField col-sm-3 col-md-3 col-lg-3" id="checkOutDate" name="end_date"
                                 placeholder="Check-in" style={{marginLeft:2,height:70, fontSize:17}} onChange={this.handleChange}/>

                                 <select className="TextField col-sm-2 col-md-2 col-lg-2" id="noOfGuests" name="capacity" onChange={this.handleChange}
                                  style={{marginLeft:2,height:70, fontSize:17}}>
                                     <option selected="selected">No of Guests</option>
                                     <option value="1">1</option>
                                     <option value="2">2</option>
                                     <option value="3">3</option>
                                     <option value="4">4</option>
                                 </select>

                      </div>
                      <input type="image" src={clickIcon} style={{height:70}} onClick={this.handleSubmit}/>

                  </div>
              </div>
           );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchhotels_action:searchhotels_action},dispatch);
}

export default connect(null,mapDispatchToProps)(HotelSearchBar);
