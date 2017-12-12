import React,{ Component } from 'react';
import HomePageHeader from './headers/homepage_header';
import GuestDetails from './subcomponents/hotel_guest_details'
import BookFasterNextTime from './subcomponents/book_faster_next_time';
import BillingInformation from './subcomponents/billing_information'
import HotelBillingSummary from './subcomponents/hotel_billing_summary';
import HotelTermsAndConditions from './subcomponents/hotel_tnc'
import HotelDetails from './subcomponents/hotel_details'
import HomeHeader1 from './headers/homepage_header1';

import './../images/subcomponent.css';

class HotelBillingPage extends Component {


  render() {
    console.log("It will render flight billing page:");
    return (
              <div className="flight-billing-page">
                  <div className="flight-billing-page-header">
                  <HomeHeader1/>
                  </div>

                  <div className = "flight-billing-body">
                      <div className ="hotel-billing-body-left-nav" >

                      </div>

                      <div className ="hotel-billing-body-centre">
                          <HotelDetails/>
                          <GuestDetails/>
                          <BookFasterNextTime/>
                          <BillingInformation/>
                          <HotelTermsAndConditions/>
                      </div>

                      <div className ="hotel-billing-body-right-nav">
                          <HotelBillingSummary/>
                      </div>
                  </div>

              </div>
           );
  }
}



export default HotelBillingPage;
