import { userConstants } from '../constants/userConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      console.log("in login success " + action.user.email);
      return {  
        loggedIn: true,
        users: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        error : action.error
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}