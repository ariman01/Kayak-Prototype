import { userConstants } from '../constants';
import { userapi } from '../api/userAPI';
import { alert_actions } from './alert_action';
import {history,saveServerToken} from "../utils/util";
import * as UTIL from  "../utils/util";
import {currentflight_action} from './flight_action';
import {currentcar_action} from './car_action';
import {currenthotel_action} from './hotel_action';
export const useraction={
    signin_action,
    signup_action,
    setUser_action,
    getuserdetails_action,
    edituserdetails_action,
    deleteuser_action,
    get_user_card_details_action
};

function signin_action(user) {
    return dispatch => {
        console.log("User sign in request: user",user);
        userapi.signinAPI(user)
            .then(
                response => {
                    if(response.status===201){
                        response.json().then((response) => {
                            console.log(response.userinfo);
                            console.log("signin_action"+response);
                            dispatch(success(response.userinfo));
                            UTIL.saveServerToken(response.userinfo,response.servertoken,"user");
                            history.push('/cars');
                        });
                    }else{
                      response.json().then((response) => {
                        alert(response.message?response.message:"Sign In failed !!!");
                        dispatch(failure(response.message));
                        dispatch(alert_actions.error(response.message));
                      });
                    }
                } );
    };
    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'LOGIN_FAILURE', error } }
}

function signup_action(user) {
    return dispatch => {
        userapi.signupAPI(user)
            .then(
                response => {
                    if(response.status===201)
                    {
                            response.json().then((response) => {
                              console.log("User sign up response:",response);
                                if(response.code===201)
                                {
                                //dispatch(success(response));
                                dispatch(success(response.userinfo));
                                UTIL.saveServerToken(response.userinfo,response.servertoken,"user");
                                //saveServerToken(user.username);
                                alert("user successfully signed up !!!");
                                history.push('/cars');
                                }
                                else
                                {
                                    alert(response.message?response.message:"Sign up failed !!!");
                                    dispatch(failure(response.message));
                                }
                        });
                    }else if(response.status === 405){
                      alert("User already exists !!!");
                    }else
                    {
                        dispatch(failure(response.message));
                        dispatch(alert_actions.error(response.message));
                    }
                });
    };
    function success(user) { return { type: 'REGISTER_SUCCESS', user } }
    function failure(error) { return { type: 'REGISTER_FAILURE', error } }
}
function setUser_action(user_id)
{
    console.log("its set user action");
    return dispatch => {
        dispatch(setUser({user_id:user_id}));
    };
    function setUser(result){return { type :'SET_USER',result }}
}


function getuserdetails_action(payload) {
    console.log("its getuserdetails"+payload.email);
    return dispatch => {
        userapi.getuserdetailsAPI(payload)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                            if(response.code===201)
                            {
                              console.log("get user detail response:",response.result);
                                dispatch(success(response));
                                history.push('/userdetails');
                            }
                            else
                            {
                                dispatch(failure(response.message));
                            }
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                });
    };
    function success(result) { return { type: 'GETUSER_DETAILS', result:result.result[0] } }
    function failure(error) { return { type: 'GETALL_FAILURE', error } }
}

function get_user_card_details_action(payload) {
  console.log("its payload in get_user_details_action"+payload.email+payload.data);
    return dispatch => {
        userapi.get_user_card_detailsAPI(payload)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                            if(response.code===201)
                            {
                              console.log("get user detail response:",response.result[0]);
                                dispatch(success(response.result[0]));
                                if(payload.data.carrier_name)
                                {
                                dispatch(currentflight_action(payload.data));
                                }
                                else if(payload.data.car_type)
                                {
                                  dispatch(currentcar_action(payload.data));
                                }
                                else if(payload.data.hotel_name)
                                {
                                  dispatch(currenthotel_action(payload.data));
                                }
                            }
                            else
                            {
                                dispatch(failure(response.message));
                            }
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                });
    };
    function success(result) { return { type: 'GETUSERCARD_DETAILS', result } }
    function failure(error) { return { type: 'GETALL_FAILURE', error } }
}
function edituserdetails_action(user) {
    console.log("its edit user details actions"+user.first_name);
    return dispatch => {
        userapi.edituserdetailsAPI(user)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                            if(response.code===201)
                            {
                                dispatch(success(response));
                                history.push('/flights');
                            }
                            else
                            {
                                dispatch(failure(response.message));
                            }
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                        dispatch(alert_actions.error(response.message));
                    }
                });
    };
    function success(user) { return { type: 'EDITUSER_SUCCESS', user } }
    function failure(error) { return { type: 'EDITUSER_FAILURE', error } }
}

function deleteuser_action(user) {
    return dispatch => {
        userapi.deleteuserAPI(user)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                            if(response.code===201)
                            {
                                dispatch(success(response));
                                UTIL.deleteServerToken("user");
                                history.push('/flights');
                            }
                            else
                            {
                                dispatch(failure(response.message));
                            }
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                        dispatch(alert_actions.error(response.message));
                    }
                });
    };
    function success(user) { return { type: 'DELETE_SUCCESS', user } }
    function failure(error) { return { type: 'DELETE_FAILURE', error } }
}

export const billingUserinfoUpdate = (userinfo) =>{
    console.log("Action UPDATE_BILLING_USERINFO");
    return {
      type:"UPDATE_BILLING_USERINFO",
      userinfo:userinfo
    }
}
