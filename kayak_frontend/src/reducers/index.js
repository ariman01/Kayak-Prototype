import { combineReducers } from 'redux';
import { authentication } from './authentication_reducer';
import { registration } from './registration_reducer';
import { users } from './user_reducer';
import { alert } from './alert_reducer';
import cardetails_reducer from './car_reducer';
import flightdetails_reducer from './flight_reducer';
import hoteldetails_reducer from './hotel_reducer';
import admin_reducer from './admin_reducer'
const index = combineReducers({
  authentication,
  registration,
  users,
  alert,
    cardetails_reducer,
    flightdetails_reducer,
    hoteldetails_reducer,
    admin_reducer
});

export default index;
