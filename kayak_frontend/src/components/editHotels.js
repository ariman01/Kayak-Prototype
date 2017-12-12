import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleHotelSearch} from './../api/adminAPI';
import EditHotelTile from './searchbars/edithotel_tiles';
import AdminDashboardHeader from './headers/admin_dashboard_header';
import './../images/home.css';

class EditHotels extends Component {
  constructor(){
    super();
    this.searchhotel ={}
  }

  hotelSearch(data){
    console.log("this.searchhotel.hotel_id ",this.searchhotel.hotel_id );
    console.log("this.searchhotel.hotel_name ",this.searchhotel.hotel_name);
    if((this.searchhotel.hotel_id) || (this.searchhotel.hotel_name)){
      this.props.handleHotelSearch(data);
    }else{
      alert("User need to provide either hotel id  or hotel name");
    }

  }


render() {
    console.log("It will display list of hotels searched by the user");
    return (
              <div>
              <div>
              <AdminDashboardHeader/>
              </div>

              <div className = "hotel-details-body">
                <div style = {{marginLeft:420}}>
                    <input placeholder="Hotel ID" id="hotel_id" onChange={(hotel_id) => {this.searchhotel.hotel_id = hotel_id.target.value}}/>
                     <strong> OR  </strong>
                    <input placeholder="Hotel Name" id="hotel_name" onChange={(hotel_name) => {this.searchhotel.hotel_name = hotel_name.target.value}}/>
                    <button style={{marginLeft:15}} onClick ={() => this.hotelSearch(this.searchhotel)} ><strong>Search</strong></button>
                </div>
                <br></br>
                <div className ="hotel-details-body-left-nav">

                </div>

                <div className ="hotel-details-body-centre-admin">

                {this.props.listOfSearchedHotels.map((hotel)=>{
                    return (<EditHotelTile data={hotel} style={{paddingTop:10}}/>)
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
    return bindActionCreators({handleHotelSearch:handleHotelSearch},dispatch);
}

function mapStateToProps(state){
  console.log("Edit hotels mapStateToProps: "+state.admin_reducer.listOfSearchedHotels);
  return{
      listOfSearchedHotels: state.admin_reducer.listOfSearchedHotels,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditHotels);
