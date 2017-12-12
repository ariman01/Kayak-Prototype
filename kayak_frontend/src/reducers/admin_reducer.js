
const initialData ={
  hotelBillingInformation:[],
  carBillingInformation:[],
  flightBillingInformation:[],
  total_sales:{car_sales:0,flight_sales:0,hotel_sales:0,user_booking:0},
  hotel_analysis_data:[{
      top_ten_hotel_sales:{
          hotels:[],
          sales:[]
      }},
      {top_ten_hotel_sales_city:{
          city_name:[],
          sales:[]
      }},
      {top_ten_host_sales:{
          hotels:[],
          sales:[]
      }}
   ],

  car_analysis_data:[{
       top_ten_car_sales:{
           models:[],
           sales:[]
       }},
       {top_ten_city_sales:{
           cities:[],
           sales:[]
       }},
       {top_ten_agency_sales:{
           agencies:[],
           sales:[]
       }}
    ],

  flight_analysis_data:[{
        top_ten_carrier_sales:{
            carriers:[],
            sales:[]
        }},
        {top_ten_city_sales:{
            cities:[],
            sales:[]
        }},
        {top_ten_carrier_bookings:{
            carriers:[],
            bookings:[]
        }}
     ],
listOfSearchedHotels : [],
current_hotel_edit:{},
listOfSearchedCars :[],
current_car_edit:{},
listOfSearchedFlights :[],
current_flight_edit:{},
searchedUser :[],
current_user_edit :{},
admin_details : [],
edit_admin_details:{},
user_trace_data : {
    activities:[],
    timespent:[]
  }
}

export default function admin_reducer(state = initialData, action) {
    switch (action.type) {

        case 'ADMIN_LOGIN_SUCCESS':
            let current_sales={};
            current_sales.car_sales = action.data.car_sales;
            current_sales.flight_sales = action.data.flight_sales;
            current_sales.flight_sales = action.data.flight_sales;
            return Object.assign({},state,{
              total_sales:current_sales
            });
        case 'ADMIN_LOGIN_FAIL':
            return {
                ...state,
                error: action.error
            };
        case 'UPDATE_TOTAL_SALES':
        return Object.assign({},state,{
          total_sales:action.total_Sales
        });

        case 'UPDATE_HOTEL_ANALYSIS':
        return Object.assign({},state,{
          hotel_analysis_data:action.hotel_analysis_data
        });

        case 'UPDATE_HOTEL_BILLING_INFO':
        return Object.assign({},state, {
            hotelBillingInformation: action.hotel_billing_info
        });
        case 'UPDATE_CAR_BILLING_INFO':
        return Object.assign({},state, {
            carBillingInformation: action.car_billing_info
        });
        case 'UPDATE_FLIGHT_BILLING_INFO':
        return Object.assign({},state, {
            flightBillingInformation: action.flight_billing_info
        });
        case 'UPDATE_CAR_ANALYSIS':
        return Object.assign({},state,{
          car_analysis_data:action.car_analysis_data
        });

        case 'UPDATE_FLIGHT_ANALYSIS':
        return Object.assign({},state,{
          flight_analysis_data:action.flight_analysis_data
        });
        case 'UPDATE_TOTAL_SALES_INFO':
        return Object.assign({},state,{
          total_sales:action.total_sales_info
        });

        case 'UPDATE_LIST_OF_SEARCHED_HOTELS':
        return Object.assign({},state,{
          listOfSearchedHotels:action.payload
        });
        case 'EDIT_HOTEL_INFO':
        return Object.assign({},state,{
          current_hotel_edit:action.hotelinfo
        });

        case 'UPDATE_LIST_OF_SEARCHED_CARS':
        return Object.assign({},state,{
          listOfSearchedCars:action.payload
        });

        case 'EDIT_CAR_INFO':
        return Object.assign({},state,{
          current_car_edit:action.carinfo
        });

        case 'UPDATE_LIST_OF_SEARCHED_FLIGHTS':
        return Object.assign({},state,{
          listOfSearchedFlights:action.payload
        });

        case 'EDIT_FLIGHT_INFO':
        return Object.assign({},state,{
          current_flight_edit:action.carinfo
        });

        case 'UPDATE_SEARCHED_USER':
        return Object.assign({},state,{
          searchedUser : [action.payload]
        });

        case 'EDIT_USER_INFO':
        return Object.assign({},state,{
          current_user_edit:action.userinfo
        });

        case 'SET_ADMIN_INFO':
        console.log("SET ADMIN INFO:"+typeof(action.admininfo));
        return Object.assign({},state,{
          admin_details:action.admininfo
        });

        case 'SET_EDIT_ADMIN_INFO':
        console.log("SET EDIT ADMIN INFO:"+typeof(action.admininfo));
        return Object.assign({},state,{
          edit_admin_details:action.admininfo
        });
        case 'UPDATE_USER_TRACE':
          console.log("UPDATE_USER_TRACE action");
          return Object.assign({},state,{
            user_trace_data:action.usertrace
          });
        default:
            return state
    }
}
