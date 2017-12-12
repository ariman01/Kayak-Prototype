import {searchhotelsAPI,bookhotelAPI} from '../api/hotelAPI';
import {history} from "../utils/util";

export function searchhotels_action(payload){
    console.log("its search hotel"+payload);
    return dispatch => {
        var ONE_DAY = 1000 * 60 * 60 * 24;
        var start_d= new Date(payload.start_date+'T00:00:00');
        var end_d= new Date(payload.end_date+'T00:00:00');
        var date1_ms = start_d.getTime();
        var date2_ms = end_d.getTime();
        var difference_ms = Math.abs(date1_ms - date2_ms);
        var setday = {
          hotelfromdate: start_d.toDateString(),
          hoteltodate: end_d.toDateString(),
          days: Math.round(difference_ms/ONE_DAY),
          start_date:payload.start_date,
          end_date:payload.end_date,
        }
        dispatch(sethoteldates(setday));
        searchhotelsAPI(payload)
            .then(
                response => {
                    if(response.status===201)
                    {
                        response.json().then((response) => {
                            console.log("its result in hotelaction"+ response.result);
                            if(response.result && response.result.length <=0){
                              alert("No data found for the given search");
                            }
                            else{
                              dispatch(success(response.result));
                              history.push('/hoteldetails');
                            }

                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                }
            );
    };
    function sethoteldates(result){return { type :'HOTEL_DAYS',result}}
    function success(result) { return { type: 'HOTEL_SUCCESS', result } }
    function failure(error) { return { type: 'HOTEL_FAILURE', error } }
}
export function currenthotel_action(payload)
{
    return dispatch => {
        dispatch(success(payload));
        history.push('/hotelbillingpage');
    };
    function success(result) { return { type: 'CURRENT_HOTEL', result } }
}
export function setprice_action(payload)
{
    return dispatch => {
        dispatch(sethotelprice(payload));
    };
    function sethotelprice(result){return { type :'HOTEL_FINALAMOUNT',result }}
}
export function bookhotel_action(payload){
    console.log("its date in bookhotel action"+payload.start_date);
    return dispatch => {
        bookhotelAPI(payload)
            .then(
                response => {
                    if(response.status==201)
                    {
                        response.json().then((response) => {
                            console.log(response.result);
                            history.push('/afterbookinghotels');
                        });
                    }
                    else
                    {
                        dispatch(failure(response.message));
                    }
                }
            );
    };

    function failure(error) { return { type: 'HOTEL_FAILURE', error } }
}
export function addDamageProtection_action(payload)
{
    return dispatch => {
        dispatch(sethotelprice({booking_amount:payload}));
    };
    function sethotelprice(result){return { type :'HOTEL_FINALAMOUNT',result }}
}

export const updateLastAdminSearch = (last_search) => {
    console.log("Action UPDATE_LAST_HOTEL_ADMIN_SEARCH");
    return {
        type: "UPDATE_LAST_HOTEL_ADMIN_SEARCH",
        last_search: last_search
    }
}

export const setHotelConfig = (config)=>{
return {
  type:'SET_HOTEL_CONFIG',
  config:config
  }
}
