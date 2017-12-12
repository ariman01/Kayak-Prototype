// Add utility methods
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const saveServerToken = (userdata, servertoken, type) => {
    console.log("saveServerToken",userdata);
    if(type === "user"){
        localStorage.setItem('currentUser',JSON.stringify(userdata));
        localStorage.setItem('userServertoken',servertoken);
    }
    if(type === "admin"){
      localStorage.setItem('currentAdmin',JSON.stringify(userdata));
      localStorage.setItem('adminServertoken',servertoken);
    }

};

export const getAdminDetails=()=>{
  if(localStorage.currentAdmin){
    var admindetail = JSON.parse(localStorage.currentAdmin);
    return (admindetail.username?admindetail.username:null);
  }else{
    return null;
  }

}

export const getUserDetails=()=>{
  if(localStorage.currentUser){
    var userdetail = JSON.parse(localStorage.currentUser);
    return (userdetail.username?userdetail.username:null);
  }else{
    return null;
  }

}

export const deleteServerToken = (usertype) => {
  if(usertype === "admin"){
    localStorage.removeItem('currentAdmin');
    localStorage.removeItem('adminServertoken');
  }else if(usertype === "user"){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userServertoken');
      alert("user will be logged out");
      history.push('/flights');
  }
};

export const getUserHTTPHeader = function(){
    var header = {
        ...headers,
        servertoken:localStorage.userServertoken?localStorage.userServertoken:null
    }
    return header;
};

export const getAdminHTTPHeader = function(){
    var header = {
        ...headers,
        servertoken:localStorage.adminServertoken?localStorage.adminServertoken:null
    }
    return header;
};
