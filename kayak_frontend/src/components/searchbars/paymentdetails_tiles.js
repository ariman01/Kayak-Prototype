import React,{ Component } from 'react';
import HomePageHeader from './../headers/homepage_header';
import './../../images/user_profile.css';


class PaymentDetailsTile extends Component {
  render() {
    console.log("It will display user profile");
    return (
            <div>
                    <table style = {{padding : 30}}>
                        <tbody>
                          <tr>
                            <td><strong>Name on card</strong></td>
                            <td>{this.props.data.name_on_card}</td>
                          </tr>
                          <hr></hr>
                           <tr>
                            <td><strong>Card Number</strong></td>
                            <td>{this.props.data.card_number}</td>
                          </tr>
                          <hr></hr>
                          <tr>
                            <td><strong>Card Type</strong></td>
                            <td>{this.props.data.card_type}</td>
                          </tr>
                          <hr></hr>
                          <tr>
                            <td><strong>Booking Address</strong></td>
                            <td><a href="">{this.props.data.address},{this.props.data.city},{this.props.data.state}-{this.props.data.zip}</a></td>
                          </tr>
                          <br></br>
                          <br></br>
                          <hr></hr>


                        </tbody>
                      </table>





            </div>
           );
  }
}



export default PaymentDetailsTile;
