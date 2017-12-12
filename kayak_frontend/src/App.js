import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Redirect} from 'react-router-dom';
import ShowCars from './components/show_cars';
import ShowFlights from './components/show_flights';
import ShowHotels from './components/show_hotels';
import SearchCar from "./components/search_car";
import CarSearchBar from './components/searchbars/car_search_bar';
import SearchFlight from './components/search_flight';
import SearchHotel from './components/search_hotel';
import HomePageHeader from './components/headers/homepage_header';
import HomeScreenButtonPanel from './components/searchbars/homescreen_button_panel';
import CarSearchLeftNav from './components/searchbars/car_search_leftnav';
import CarTile from './components/searchbars/car_tiles';
import FlightTile from './components/searchbars/flight_tiles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {history} from './utils/util';
import ViewCar from './components/subcomponents/view_car';
import BookingDetails from './components/subcomponents/booking_details';
import RentalCarPrice from './components/subcomponents/rental_car_price';
import FlightBillingPage from './components/flight_billing_page';
import CarBillingPage from './components/car_billing_page';
import AdminDashboard from './components/admin_dashboard';
import AddCarAdmin from './components/subcomponents/add_car_admin';
import AddHotelAdmin from './components/subcomponents/add_hotel_admin';
import AddFlightAdmin from './components/subcomponents/add_flight_admin';
import UserProfile from './components/user_profile';
import SignUp from './components/sign_up';
import SignIn from './components/sign_in';
import AdminLogin from './components/admin_login'
import HotelGraphs from './components/subcomponents/hotel_graphs';
import FlightGraphs from './components/subcomponents/flight_graphs';
import CarGraphs from './components/subcomponents/car_graphs';
import HotelBillingInfo from './components/hotel_billing_information';
import EditHotels from './components/editHotels';
import EditHotelTile from './components/searchbars/edithotel_tiles';
import EditFlights from './components/editFlights';
import EditCars from './components/editCars';
import EditHotelForm from './components/searchbars/edithotel_form';
import AddPaymentDetailsForm from './components/searchbars/addpaymentdetails_form';
import EditFlightForm from './components/searchbars/editflight_form';
import EditCarForm from './components/searchbars/editcar_form';
import FlightBillingInfo from './components/flight_billing_information';
import CarBillingInfo from './components/car_billing_information';
import AddUserAdmin from './components/subcomponents/add_user_admin';
import SearchUser from './components/subcomponents/search_user';
import SearchedUser from './components/subcomponents/searched_user';
import UpdateUserAdmin from './components/subcomponents/edit_user_form';
import AdminProfile from './components/subcomponents/admin_profile';
import EditAdminProfile from './components/subcomponents/edit_admin_profile';
import HotelBillingPage from './components/hotel_billing_page';
import AfterBookingFlights from './components/afterbookingflights';
import AfterBookingCars from './components/afterbookingcars';
import AfterBookingHotels from './components/afterbookinghotels';
import PaymentDetails from './components/payment_details';
import UserHotelHistory from './components/user_hotel_history';
import UserHistory from './components/user_history';
import UserCarHistory from './components/user_car_history';
import UserFlightHistory from './components/user_flight_history';
import EditUserDetails from './components/searchbars/editpreference_form';
import EditPaymentDetails from './components/searchbars/editpaymentdetails_form';
import DeleteAccount from './components/deleteaccount';
import TraceUser from './components/subcomponents/trace_user';
import * as UTIL from './utils/util';
class App extends Component {


    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <MuiThemeProvider>

                            <Route  exact path="/flightdetails" render ={() => (<ShowFlights/>)}/>
                            <Route  exact path="/cardetails" render ={() => (<ShowCars/>)}/>
                            <Route  exact path="/hoteldetails" render ={() => (<ShowHotels/>)}/>
                            <Route  exact path="/cars" render ={() => (<SearchCar/>)}/>
                            <Route  exact path="/flights" render ={() => (<SearchFlight/>)}/>
                            <Route  exact path="/hotels" render ={() => (<SearchHotel/>)}/>
                            <Route  exact path="/flightbillingpage" render ={() => (<FlightBillingPage/>)}/>
                            <Route  exact path="/admindashboard" render ={() =>UTIL.getAdminDetails()?(<AdminDashboard/>):(<AdminLogin/>)}/>
                            <Route  exact path="/cargraphs" render ={() => (<CarGraphs/>)}/>
                            <Route  exact path="/flightgraphs" render ={() => (<FlightGraphs/>)}/>
                            <Route  exact path="/addcaradmin" render ={() => (<AddCarAdmin/>)}/>
                            <Route  exact path="/addhoteladmin" render ={() => (<AddHotelAdmin/>)}/>
                            <Route  exact path="/addflightadmin" render ={() => (<AddFlightAdmin/>)}/>
                            <Route  exact path="/carbillingpage" render ={() => (<CarBillingPage/>)}/>
                            <Route  exact path="/adminlogin" render ={() => (<AdminLogin/>)}/>

                            <Route  exact path="/addpaymentdetailsform" render ={() => (<AddPaymentDetailsForm/>)}/>
                            <Route  exact path="/hotelgraphs" render ={() => (<HotelGraphs/>)}/>
                            <Route  exact path="/editcars" render ={() => (<EditCars/>)}/>
                            <Route  exact path="/edithotels" render ={() => (<EditHotels/>)}/>
                            <Route  exact path="/editflights" render ={() => (<EditFlights/>)}/>
                            <Route  exact path="/edithotelform" render ={() => (<EditHotelForm/>)}/>
                            <Route  exact path="/editcarform" render ={() => (<EditCarForm/>)}/>
                            <Route  exact path="/editflightform" render ={() => (<EditFlightForm/>)}/>
                            <Route  exact path="/adminflightbilling" render ={() => (<FlightBillingInfo/>)}/>
                            <Route  exact path="/admincarbilling" render ={() => (<CarBillingInfo/>)}/>
                            <Route  exact path="/adminhotelbilling" render ={() => (<HotelBillingInfo/>)}/>
                            <Route  exact path="/adduseradmin" render ={() => (<AddUserAdmin/>)}/>
                            <Route  exact path="/searchuseradmin" render ={() => (<SearchUser/>)}/>
                            <Route  exact path="/searcheduseradmin" render ={() => (<SearchedUser/>)}/>
                            <Route  exact path="/edituserform" render ={() => (<UpdateUserAdmin/>)}/>
                            <Route  exact path="/adminprofile" render ={() => (<AdminProfile/>)}/>
                            <Route  exact path="/editadminprofile" render ={() => (<EditAdminProfile/>)}/>
                            <Route  exact path="/hotelbillingpage" render ={() => (<HotelBillingPage/>)}/>
                            <Route  exact path="/signup" render ={() => (<SignUp/>)}/>
                            <Route  exact path="/signin" render ={() => (<SignIn/>)}/>
                            <Route  exact path="/afterbookingflights" render ={() => (<AfterBookingFlights/>)}/>
                            <Route  exact path="/afterbookingcars" render ={() => (<AfterBookingCars/>)}/>
                            <Route  exact path="/afterbookinghotels" render ={() => (<AfterBookingHotels/>)}/>
                            <Route  exact path="/paymentdetails" render ={() => (<PaymentDetails/>)}/>
                            <Route  exact path="/userdetails" render ={() => (<UserProfile/>)}/>
                            <Route  exact path="/edituserdetails" render ={() => (<EditUserDetails/>)}/>
                            <Route  exact path="/userhistory" render ={() => (<UserHistory/>)}/>
                            <Route  exact path="/userhotelhistory" render ={() => (<UserHotelHistory/>)}/>
                            <Route  exact path="/usercarhistory" render ={() => (<UserCarHistory/>)}/>
                            <Route  exact path="/userflighthistory" render ={() => (<UserFlightHistory/>)}/>
                            <Route  exact path="/deleteaccount" render ={() => (<DeleteAccount/>)}/>
                            <Route  exact path="/editpaymentdetails" render ={() => (<EditPaymentDetails/>)}/>
                            <Route  exact path="/traceuser" render ={() => (<TraceUser/>)}/>
                    </MuiThemeProvider>
                </Router>
            </div>
        );
    }
}

export default App;
