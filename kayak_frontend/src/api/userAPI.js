import { useraction } from './../actions/user_action';
import {history,saveServerToken} from "../utils/util";
export const userapi= {
    signinAPI,
    signupAPI,
    getuserdetailsAPI,
    edituserdetailsAPI,
    editcarddetailsAPI,
    getcarddetailsAPI,
    deleteuserAPI,
    getuserhistorycarsAPI,
    getuserhistoryflightsAPI,
    getuserhistoryhotelsAPI,
    get_user_card_detailsAPI
};
const headers = {
    'Accept': 'application/json'
};
const server_url = "http://localhost:3010"
function signupAPI(user)
{
    console.log("its user in userAPI signup"+user.username+user.password);
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode: 'cors',
        headers: { ...headers,'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch('http://localhost:3010/users/signup', requestOptions)
        .then((response) =>{
            return response;
        });
}
function signinAPI(user)
{
        const requestOptions = {
            method: 'POST',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        return fetch('http://localhost:3010/users/login', requestOptions)
            .then((response) =>{
                return response;
            });
}

function getuserdetailsAPI(payload)
{
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode:'cors',
        headers: { ...headers,'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    };
    return fetch('http://localhost:3010/users/getuserdetails', requestOptions)
        .then((response) =>{
            return response;
        });
}

export const edituserdetailsAPI = function(userdetail){
    console.log("userlogin details:",userdetail.email);
    const email={
        email:userdetail.email
    }
    return (dispatch) => {
        fetch(`${server_url}/users/edituserdetails`, {
            method: 'POST',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(userdetail)
        }).then(res => {
            if(res.status === 201){
                dispatch(useraction.getuserdetails_action(email));
            }else{
                alert((res.message)?res.message:"user edit failed !!!");
            }
        }).catch(err => {
            console.log("Error user edit!!!");
            return err;
        });
    };
};
function getcarddetailsAPI(email) {
    return (dispatch) => {
        fetch(`${server_url}/users/getcarddetails`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {...headers, 'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        }).then(res => {
          if(res.status===201)
          {
              res.json().then((response) => {
                  if(response.code===201)
                  {
                    console.log("its result in getcarddetailsAPI"+response.result[0]);
                    dispatch(success(response));
                    history.push('/paymentdetails');
                  }
                  else
                  {
                    alert((res.message) ? res.message : "get card failed !!!");
                  }
              });
          }
      });
    }
    function success(result) { return { type: 'GETCARD_DETAILS', result:result.result } }
}
function get_user_card_detailsAPI(payload)
{
  const email= {email:payload.email};
  console.log("its payload in get_user_details_api"+email);
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode:'cors',
        headers: { ...headers,'Content-Type': 'application/json'},
        body: JSON.stringify(email)
    };
    return fetch('http://localhost:3010/users/getusercarddetails', requestOptions)
        .then((response) =>{
            return response;
        });
}

function getuserhistorycarsAPI(email) {
    return (dispatch) => {
        fetch(`${server_url}/users/getuserhistorycars`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {...headers, 'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        }).then(res => {
          if(res.status===201)
          {
              res.json().then((response) => {
                  if(response.code===201)
                  {
                    console.log("its result in getUserHistoryAPI"+response);
                    dispatch(success(response));
                    history.push('/usercarhistory');
                  }
                  else
                  {
                    alert((res.message) ? res.message : "get card failed !!!");
                  }
              });
          }
      });
    }
    function success(result) { return { type: 'GETUSERCAR_HISTORY', result:result.result } }
}
function getuserhistoryflightsAPI(email) {
    return (dispatch) => {
        fetch(`${server_url}/users/getuserhistoryflights`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {...headers, 'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        }).then(res => {
          if(res.status===201)
          {
              res.json().then((response) => {
                  if(response.code===201)
                  {
                    console.log("its result in getUserHistoryAPI"+response);
                    dispatch(success(response));
                    history.push('/userflighthistory');
                  }
                  else
                  {
                    alert((res.message) ? res.message : "get card failed !!!");
                  }
              });
          }
      });
    }
    function success(result) { return { type: 'GETUSERFLIGHT_HISTORY', result:result.result } }
}
function getuserhistoryhotelsAPI(email) {
    return (dispatch) => {
        fetch(`${server_url}/users/getuserhistoryhotels`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {...headers, 'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        }).then(res => {
          if(res.status===201)
          {
              res.json().then((response) => {
                  if(response.code===201)
                  {
                    console.log("its result in getUserHistoryAPI"+response);
                    dispatch(success(response));
                    history.push('/userhotelhistory');
                  }
                  else
                  {
                    alert((res.message) ? res.message : "get card failed !!!");
                  }
              });
          }
      });
    }
    function success(result) { return { type: 'GETUSERHOTEL_HISTORY', result:result.result } }
}
export const editcarddetailsAPI = function(carddetail){
    console.log("card details:",carddetail.name_on_card);
    const email={
        email:carddetail.email
    }
    return (dispatch) => {
        fetch(`${server_url}/users/editcarddetails`, {
            method: 'POST',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(carddetail)
        }).then(res => {
            if(res.status === 201){
                dispatch(getcarddetailsAPI(email));
            }else{
                alert((res.message)?res.message:"card edit failed !!!");
            }
        }).catch(err => {
            console.log("Error user edit!!!");
            return err;
        });
    };
};
export const addcarddetailsAPI = function(carddetail){
  console.log("its add card after book");
    const email={
        email:carddetail.email
    }
    return (dispatch) => {
        fetch(`${server_url}/users/addcarddetails`, {
            method: 'POST',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(carddetail)
        }).then(res => {
          if(res.status===201)
          {
              res.json().then((response) => {
                  if(response.code===201)
                  {
                    dispatch(getcarddetailsAPI(email));
                  }
                  else
                  {
                    alert((res.message) ? res.message : "adding card failed !!!");
                  }
              });
          }
      });
    };
};
function deleteuserAPI(user)
{
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode:'cors',
        headers: { ...headers,'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    return fetch('http://localhost:3010/users/deleteuseraccount', requestOptions)
        .then((response) =>{
            return response;
        });
}
