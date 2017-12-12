const topics = [

    "add_user_req",
    "search_user_req",
    "update_user_req",
    "delete_user_req",
    "hotel_search_admin_req",
    "hotel_search_admin_req",
    "hotel_search_admin_res",
    "hotel_update_admin_req",
    "car_search_admin_req",
    "car_update_admin_req",
    "flight_search_admin_req",
    "flight_update_admin_req",
    "add_car_req",
    "add_flight_req",
    "hotel_add_req",
    "delete_car_req",
    "delete_flight_req",
    "delete_hotel_req",
    "admin_signin_req",
    "admin_total_sales_req",
    "admin_analysis_car_req",
    "admin_analysis_flight_req",
    "admin_analysis_hotel_req",
    "car_search_req",
    "hotel_search_req",
    "flight_search_req",
    "admin_hotel_bill_req",
    "car_book_req",
    "flight_book_req",
    "hotel_book_req",
    "admin_car_bill_req",
    "admin_flight_bill_req",
    "admin_total_sales_req",
    "getuser_details_req",
    "edituser_details_req",
    "deleteuser_req",
    "addcard_details_req",
    "editcard_details_req",
    "getcard_details_req",
    "getuser_history_req",
    "signin_req",
    "signup_req",
    "admin_details_req",
    "update_admin_req",
    "get_user_card_details_req",
    "getuserhistoryHotels_req",
    "getuserhistoryCars_req",
    "getuserhistoryFlights_req",
    "user_trace_req"

];

exports.CONNECTIONPOOL_IMP = false;
exports.CONNECTIONPOOL_MONGO = false;
exports.POOL_LIMIT = 20;


exports.getTopicList = function (){
  return topics;
}
