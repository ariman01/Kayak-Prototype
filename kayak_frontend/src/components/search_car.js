import React,{ Component } from 'react';
import {searchcars_action} from "../actions/car_action";
import { connect } from 'react-redux';
import CarSearchBar from './searchbars/car_search_bar.js';
import HomeHeader from './headers/homepage_header';
import HomeHeader1 from './headers/homepage_header1';
import '../images/home.css';
import HomeScreenButtonPanel from './searchbars/homescreen_button_panel';

class SearchCar extends Component {
    constructor(props) {
        super(props);
}
  render(){
    console.log("Search Car Page");
    return  (
            <div className="carhome">
                  <HomeHeader1/>
                  <h1 style={{color:"white",marginTop:"4%", marginLeft : 380}}> Search hundreds of travel sites at once.</h1>
                  <br/><br/>
                  <div style={{paddingTop:"3%"}}>
                      <HomeScreenButtonPanel/>
                      <CarSearchBar/>
                  </div>
              </div>
           );
  }
}
export default SearchCar;
