import React,{ Component } from 'react';
import FlightSearchBar from './searchbars/flight_search_bar.js';
import HomeHeader from './headers/homepage_header';
import '../images/home.css';
import HomeScreenButtonPanel from './searchbars/homescreen_button_panel';
import HomeHeader1 from './headers/homepage_header1';

class SearchFlight extends Component {


  render() {
    console.log("Search Flight Page");
    return (
              <div className="flighthome">
                    <HomeHeader1/>
                    <div style={{paddingTop:"12%"}}>
                        <HomeScreenButtonPanel/>
                        <FlightSearchBar/>
                    </div>
                </div>

           );
  }
}



export default SearchFlight;
