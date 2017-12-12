import React,{ Component } from 'react';
import './../../images/home.css';
import './../../images/hotel.css';
import { connect } from 'react-redux';
class HotelDetails extends Component {


  render() {
    return (
              <div className="hotel-details">
                    <div className="hotel-detail1">
                        <br></br>
                        <strong><b>{this.props.current_hotel.hotel_name}</b></strong><br/>
                        <br></br>
                        Housed in a 1905 Beaux Arts building, this boutique hotel is in New York's Murray Hill district. Located between the Empire State Building, Madison Square Park, Penn Station and Times Square, the Chandler Hotel is 3 blocks from Macy's, and...
                    </div>
                    <div className="hotel-details-div">
                          <div className = "hotel-details-div1">
                              Air-conditioned<br></br> Bar/Lounge<br></br> Business center<br></br> Express check out<br></br> Fitness center<br></br> Internet<br></br> Laundry service<br></br> Meeting/Banquet facilities<br></br>
                          </div>

                          <div className = "hotel-details-div2">
                              No smoking<br></br>  Parking<br></br>  Restaurant<br></br>  Room service<br></br>  Storage available<br></br>  Wi-Fi<br></br>
                          </div>
                    </div>
              </div>

           );
  }
}
function mapStateToProps(state) {
    return {
        current_hotel: state.hoteldetails_reducer.current_hotel,
    };

}
export default connect(mapStateToProps,null)(HotelDetails);
