
import * as left_nav_util from './../utils/laft_nav_helper';
const initialState = {
cars:[],
displaycars:[],
current_car:[],
car_days:[],
car_finalamount:[],
latest_admin_search_parameter:null,
leftNavCarConfig:{
    capacity:{},
    bags:{},
    cartype:{},
    rentalagency:{}
  }
}
export default function cardetails_reducer(state = initialState, action) {
    switch (action.type) {

        case 'CAR_SUCCESS':
            let config = left_nav_util.getleftNavConfigForCar(action.result);
            return Object.assign({},state,{
              cars: action.result,
              displaycars:action.result,
              leftNavCarConfig:config
            });
        case 'CAR_FAILURE':
            return {
                ...state,
                error: action.error
            };
        case 'CURRENT_CAR':
            return{
                ...state,
                current_car:action.result
            };
        case 'CAR_DAYS':
            return{
                ...state,
                car_days:action.result
            };
        case 'CAR_FINALAMOUNT':
            return{
                ...state,
                car_finalamount:action.result
            }
        case 'UPDATE_LAST_CAR_ADMIN_SEARCH':
            return Object.assign({},state,{
              latest_admin_search_parameter:action.last_search
            });
        case 'SET_CONFIG':
            let updatedcarlist = left_nav_util.filterCarbasedOnLeftNavBar(state.cars.slice(),action.config);
            return Object.assign({},state,{
              leftNavCarConfig:action.config,
              displaycars:updatedcarlist
                })
        default:
            return state

    }

}
