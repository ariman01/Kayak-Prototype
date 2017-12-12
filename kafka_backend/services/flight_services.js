var  Flights = require('./../models/flights');
var UserTrace = require('./../models/user_trace');

exports.searchFlights = function(data, callback){
    console.log("[Kafka] Search flights data:",data);
    Flights.searchFlights({src_city:data.src_city,destination_city:data.destination_city,operational_day:data.operational_day},
      function(err, result){
        if(err){
            console.log("[Kafka] Error while searching for ")
        }
        console.log("[Kafka]flight_services for search flights"+result);
        callback(err, result);
        if(data.user_id){
          UserTrace.addUserActivity(data.user_id,"search flight");
        }
    });
}

exports.addFlight = function(data, callback){
    var flight = new Flights.Flights({
        flight_id:data.flight_id,
        carrier_name:data.carrier_name,
        src_city:data.src_city,
        destination_city:data.destination_city,
        flight_duration:data.flight_duration,
        operational_day:data.operational_day,
        departure_time:data.departure_time,
        price:data.price
    });
    Flights.addNewFlight(flight, function(err, result){
        if(err){
            console.log("[Kafka] Error while adding new flight:",flight.carrier_name);
        }
        callback(err,result);
    });
}
exports.bookFlight = function(data, callback){
    console.log("its data in flight_services"+data.user_id);
    var flightbookingDetail = {
        user_id:data.user_id,
        booking_date:data.booking_date,
        booking_amount:data.booking_amount,
        start_date:data.start_date,
        end_date:data.end_date,
        flight_name:data.flight_name,
        src_city:data.src_city,
        destination_city:data.destination_city,
        flight_id:data.flight_id};
    console.log("its flightbookingDetail in flight_services"+flightbookingDetail.user_id);
    Flights.bookNewFlight( flightbookingDetail , function(err , results){
        console.log("its booknewflight in flight_services"+flightbookingDetail.user_id);
        if(err){
            console.log("[Kafka] Error booking new flight")
        }else{
          if(data.user_id){
            UserTrace.addUserActivity(data.user_id,"book flight");
          }

        }
        callback(err,results);
    });
}
exports.deleteFlight = function(data, callback){
    console.log("delete flight data",data);
    Flights.deleteFlight( data.flight_id , function(err , results){
        if(err){
            console.log("[Kafka] Error deleting car ")
        }
        callback(err,results);
    });
}

exports.editFlight = function(data, callback){
    console.log("edit car data",data);
    if(!data.flight_id){
        callback("Model No missing, failed to edit without model_no",null);
    }else{
        var flightData = {};
        if(data.flight_id)
            flightData.flight_id = data.flight_id;
        if(data.carrier_name)
            flightData.carrier_name = data.carrier_name;
        if(data.src_city)
            flightData.src_city = data.src_city;
        if(data.destination_city)
            flightData.destination_city = data.destination_city;
        if(data.flight_duration)
            flightData.flight_duration = data.flight_duration;
        if(data.src_city)
            flightData.src_city = data.src_city;
        if(data.destination_city)
            flightData.destination_city = data.destination_city;
        if(data.operational_day)
            flightData.operational_day = data.operational_day;
        if(data.departure_time)
            flightData.departure_time = data.departure_time;
        if(data.price)
            flightData.price = data.price;
        Flights.editFlight(data.flight_id, flightData, function(err,result){
            if(err){
                console.log("[Kafka] Error while editing flight detail");
            }
            callback(err, result);
        });
    }

}



exports.searchFlightsAdmin = function(data, callback){
    console.log("In searchFlightsAdmin");
    Flights.searchFlightsAdmin( data.flight_id, data.carrier_name,  function(err , results){
        console.log("result is" + results);
        if(err){
            callback(err,null);
        }
        else{
            console.log("flight admin search data passed to model function");
            callback(null,results);
        }
    });
}

exports.updateFlightAdmin =function(data, callback){
    console.log("In update flight admin");
    var flightDetail = {
      flight_id : data.flight_id,
      carrier_name : data.carrier_name,
      src_city :data.src_city,
      destination_city :data.destination_city,
      flight_duration :data.flight_duration,
      operational_day :data.operational_day,
      departure_time :data.departure_time,
      price :data.price
    };
    Flights.updateFlightAdmin(flightDetail, function(err , results){
        if(err){
            callback(err,null);
        }
        else{
            console.log("Flight update data passed to model function");
            callback(null,results);
        }
    });
}
