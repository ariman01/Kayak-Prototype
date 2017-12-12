import React,{ Component } from 'react';
import './../../images/home.css';
import flightIcon from './../../images/flight.jpg';
import carIcon from './../../images/car.png';
import hotelIcon from './../../images/hotel.png';
import {Route, withRouter} from 'react-router-dom';


class HomeScreenButtonPanel extends Component {
  handleCar(){
    console.log("go to car home is clicked");
    this.props.history.push('/cars');
  }
  handleFlight(){
    console.log("go to car home is clicked");
    this.props.history.push('/flights');
  }
  handleHotel(){
    console.log("go to car home is clicked");
    this.props.history.push('/hotels');
  }
  render() {
    return (
      <div className="hbutton-panel">
        <button className = "homescreeen-button" type="button"
        onClick={() => this.handleHotel()}><span id = "flight-icon"><img src ={hotelIcon}/></span> &nbsp;Hotels</button>
        <button className = "homescreeen-button" type="button"
        onClick={() => this.handleFlight()}><span id = "flight-icon"><img src ={flightIcon}/></span> &nbsp;Flights</button>
        <button className = "homescreeen-button" type="button"
        onClick={() => this.handleCar()}><span id = "flight-icon"><img src ={carIcon}/></span> &nbsp;Cars</button>
      </div>
          );
  }
}

export default withRouter(HomeScreenButtonPanel);
