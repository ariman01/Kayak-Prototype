import React,{ Component } from 'react';
import HotelTile from './searchbars/hotel_tiles';
import HomePageHeader from './headers/homepage_header';
import HotelSearchLeftNav from './searchbars/hotel_search_leftnav';
import { connect } from 'react-redux';
import './../images/home.css';
import HomeHeader1 from './headers/homepage_header1';


class ShowHotels extends Component {
constructor(){
  super();
}
  render() {
    return (
              <div>
              <div className="show-hotel-header">
                <HomeHeader1/>
              </div>

              <div className = "hotel-details-body">
                <div className ="hotel-details-body-left-nav">
                  <HotelSearchLeftNav/>
                </div>
                 <div className ="hotel-details-body-centre">
                 {this.props.listofdisplayedhotels.length > 0 ?
                     this.props.listofdisplayedhotels.map((hotel) => {
                         return (<div><HotelTile data={hotel} style={{paddingTop: 10}}/></div>);
                     })
                     : ''
                 }
                  </div>
                <div className ="hotel-details-body-right-nav">
                </div>
              </div>
              </div>
           );
  }
}
function mapStateToProps(state) {
     console.log("mapsto prop hotel",state.hoteldetails_reducer.displayedhotels);
    return {
        listofdisplayedhotels: state.hoteldetails_reducer.displayedhotels
     };
}
export default connect(mapStateToProps,null)(ShowHotels);
