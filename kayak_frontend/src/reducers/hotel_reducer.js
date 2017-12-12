import * as left_nav_util from './../utils/laft_nav_helper';
const initialState = {
 hotels:[],
 displayedhotels:[],
 current_hotel:[],
 hotel_days:[],
 hotel_finalamount:[],
 latest_admin_search_parameter:null,
 leftHotelNavConfig:{price:1000,stars:{}}
}
export default function hoteldetails_reducer(state = initialState, action) {
    switch (action.type) {

        case 'HOTEL_SUCCESS':
            let config = left_nav_util.getleftNavConfigForHotel(action.result);
            return {
                ...state,
                hotels: action.result,
                displayedhotels:action.result,
                leftHotelNavConfig:config
            };
        case 'HOTEL_FAILURE':
            return {
                ...state,
                error: action.error
            };
        case 'CURRENT_HOTEL':
            return{
                ...state,
                current_hotel:action.result
            };
        case 'HOTEL_DAYS':
            return{
                ...state,
                hotel_days:action.result
            };
        case 'HOTEL_FINALAMOUNT':
            return{
                ...state,
                hotel_finalamount:action.result
            }
        case 'UPDATE_LAST_HOTEL_ADMIN_SEARCH':
            return Object.assign({},state,{
                latest_admin_search_parameter:action.last_search
            });
        case 'SET_HOTEL_CONFIG':
            let updatedhotellist = left_nav_util.filterHotelbasedOnLeftNavBar(state.hotels.slice(),action.config);
            return Object.assign({},state,{
                leftHotelNavConfig:action.config,
                displayedhotels:updatedhotellist
            })
        default:
            return state
    }
}
