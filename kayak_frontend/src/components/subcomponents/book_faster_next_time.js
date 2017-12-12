import React,{ Component } from 'react';
import './../../images/home.css';
import bookfaster from './../../images/bookfaster.jpeg';

class BookFasterNextTime extends Component {


  render() {
    return (
            <div className="book-faster-next-time">
                <div className= "book-faster-next-time-left">
                    <img src={bookfaster} style={{height : 130}}/>
                </div>

                <div className= "book-faster-next-time-right">

                    <input type="text" placeholder="Email Address" style={{width : "350px" , height : "30px"}}/><br></br><br></br>
                    <input type="text" placeholder="Password" style={{width : "350px" , height : "30px"}}/><br></br><br></br>
                    <input type="checkbox" checked = "true"/>Email me KAYAKs deals<br></br><br></br>
                    <input type="checkbox" checked = "true"/>Save Traveler

                </div>

            </div>

           );
  }
}

export default BookFasterNextTime;
