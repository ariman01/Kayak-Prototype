var mongoose = require('mongoose');
var mysql = require('./mysql');

var flightSchema = mongoose.Schema({
  flight_id:{
    type:String,
    required:true
  },
  carrier_name:{
    type:String,
    required : true
  },
  src_city :{
    type : String,
    required : true
  },
  destination_city :{
    type : String,
    required : true
  },
  flight_duration : {
    type : Number,
    required : true
  },
  operational_day : {
    type : Number,
    required : true
  },
  departure_time : {
    type : String,
    required : true
  },
  // arrival_time can be calculated from departure_time and flight_duration
  /*arrival_time : {
    type : String,
    required : true
  },*/
  price : {
    type  : Number,
    required : true
  }
});

const Flights = mongoose.model('Flights',flightSchema);
function addNewFlight(flightDetail, callback){
  flightDetail.save(callback);
}
function bookNewFlight(flightbookdetail, callback){
    var bookFlight = "INSERT INTO flight_transaction(user_id,flight_id,flight_name,src_city,destination_city,booking_date,booking_amount,start_date,end_date) VALUES ('" + flightbookdetail.user_id + "','" + flightbookdetail.flight_id + "','" + flightbookdetail.flight_name + "','" + flightbookdetail.src_city + "','" + flightbookdetail.destination_city + "','" + flightbookdetail.booking_date + "','" + flightbookdetail.booking_amount + "','" + flightbookdetail.start_date + "','" + flightbookdetail.end_date + "')";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else(result)
        {
            console.log("its result after mysql query"+result);
            callback(null,result);
        }
    }, bookFlight);
    console.log("[Kafka] flight model booking new flight:",flightbookdetail);
}
function deleteFlight(flight_id, callback){
    Flights.deleteOne({flight_id:flight_id}, callback);
}

function editFlight(flight_id, flightDetail, callback){
  Flights.update({ flight_id: flight_id}, {$set: flightDetail}, callback);
}

function searchFlights(parameter, callback){
  console.log("its paramter in model-flights"+parameter);
  Flights.find(parameter, callback);
}

function searchFlight(parameter, callback){
  Flights.findOne(parameter, callback);
}

function searchFlightsAdmin(flight_id, carrier_name, callback){
  var query = {};
  if(flight_id)
    query.flight_id = flight_id;
  if(carrier_name)
    query.carrier_name = carrier_name;
  console.log("searchFlightAdmin:",query);
  Flights.find(query, callback);
}


function updateFlightAdmin(flightDetail,callback){
  Flights.update({flight_id : flightDetail.flight_id},{$set:{
    carrier_name : flightDetail.carrier_name,
    src_city :flightDetail.src_city,
    destination_city :flightDetail.destination_city,
    flight_duration :flightDetail.flight_duration,
    operational_day :flightDetail.operational_day,
    departure_time :flightDetail.departure_time,
    price :flightDetail.price
  }},callback);
}


module.exports.addNewFlight = addNewFlight;
module.exports.searchFlights = searchFlights;
module.exports.searchFlight = searchFlight;
module.exports.editFlight = editFlight;
module.exports.deleteFlight = deleteFlight;

module.exports.searchFlightsAdmin = searchFlightsAdmin;
module.exports.updateFlightAdmin = updateFlightAdmin;

module.exports.bookNewFlight=bookNewFlight;

module.exports.Flights = Flights;
