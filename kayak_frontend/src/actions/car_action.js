import {searchcarsAPI,bookcarAPI} from '../api/carAPI';
import {history} from "../utils/util";
import * as UTIL from './../utils/validation';
//import {addcarddetailsAPI} from '../api/userAPI';


export function searchcars_action(payload){
    console.log("its date in searchcar action"+payload.start_date);
    return dispatch => {
        var ONE_DAY = 1000 * 60 * 60 * 24;
        var start_d= new Date(payload.start_date+'T00:00:00');
        var end_d= new Date(payload.end_date+'T00:00:00');
        var date1_ms = start_d.getTime();
        var date2_ms = end_d.getTime();
        var difference_ms = Math.abs(date1_ms - date2_ms);
        var setday = {
            carfromdate: start_d.toDateString(),
            cartodate: end_d.toDateString(),
            days: Math.round(difference_ms/ONE_DAY),
            start_date:payload.start_date,
            end_date:payload.end_date
        }
        dispatch(setcardates(setday));
        searchcarsAPI(payload)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                        console.log(response.result);
                        if(response.result && response.result.length <= 0){
                          alert("no data available");
                        }
                        else{
                          dispatch(success(response.result));
                          history.push('/cardetails');
                        }

                    });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                }
                );
        console.log("action console for reult:"+setday.days);
    };
    function setcardates(result){return { type :'CAR_DAYS',result }}
   function success(result) { return { type: 'CAR_SUCCESS', result } }
   function failure(error) { return { type: 'CAR_FAILURE', error } }
}
export function currentcar_action(payload)
{
    console.log("its payload in currentcar_action"+payload.capacity);
    return dispatch => {
        dispatch(success(payload));
        history.push('/carbillingpage');
    };
    function success(result) { return { type: 'CURRENT_CAR', result } }
}
export function setPrice(payload)
{
    return dispatch => {
        dispatch(setcarprice(payload));
    };
    function setcarprice(result){return { type :'CAR_FINALAMOUNT',result }}
}
function checkCreditDataValid(data){
  if(UTIL.validateCreditCard(data.card_number) && UTIL.validateCVV(data.cvv)
    && UTIL.checkValidState(data.state) && UTIL.validatePinCode(data.zip)
    && UTIL.validatePhone(data.phone) && UTIL.validateName(data.name_on_card)
  ){
      return true;
  }
    return false;
}
export function bookcar_action(payload){
    return dispatch => {
        bookcarAPI(payload)
            .then(
                response => {
                    if(response.status==201)
                    {
                        response.json().then((response) => {
                            console.log(response.result);
                            history.push('/afterbookingcars');
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                }
            );
    };
    function failure(error) { return { type: 'CAR_FAILURE', error } }
}
export function addDamageProtection_action(payload)
{
    return dispatch => {
        dispatch(setcarprice(payload));
    };
    function setcarprice(result){return { type :'CAR_FINALAMOUNT',result }}
}

export const updateLastAdminSearch = (last_search) => {
    console.log("Action UPDATE_LAST_CAR_ADMIN_SEARCH");
    return {
        type: "UPDATE_LAST_CAR_ADMIN_SEARCH",
        last_search: last_search
    }
};

  export const setCarConfig = (config)=>{
  return {
    type:'SET_CONFIG',
    config:config
    }
  };
