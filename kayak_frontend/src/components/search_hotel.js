import React,{ Component } from 'react';
import HotelSearchBar from './searchbars/hotel_search_bar.js';
import HomeHeader from './headers/homepage_header';
import '../images/home.css';
import HomeScreenButtonPanel from './searchbars/homescreen_button_panel';
import HomeHeader1 from './headers/homepage_header1';

class SearchHotel extends Component {


  render() {
    console.log("Search Hotel Page");
    return (
        <div className="hotel-home">
              <HomeHeader1/>
              <div style={{paddingTop:"12%"}}>
                  <HomeScreenButtonPanel/>
                  <HotelSearchBar/>
              </div>
        </div>
           );
  }
}



export default SearchHotel;
