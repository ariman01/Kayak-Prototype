var Hotels = require('../models/hotels')
var addNewHotel = require('../models/hotels')
var searchHotels = require('../models/hotels')
var mongoose = require('mongoose');
var UserTrace = require('./../models/user_trace');

exports.searchHotels = function(data, callback){
    console.log("In searchHotels");
    Hotels.searchHotels( data.hotel_city,  function(err , results){
        console.log("result is" + results);
        if(err){
            callback(null,err);
        }
        else{
            console.log("Hotel search data passed to model function");
            callback(null,results);
            if(data.user_id){
              UserTrace.addUserActivity(data.user_id,"search hotel");
            }
        }
    });
}
exports.bookHotel = function(data, callback){
    var hotelbookingDetail = {
        user_id:data.user_id,
        booking_date:data.booking_date,
        booking_amount:data.booking_amount,
        start_date:data.start_date,
        end_date:data.end_date,
        hotel_name:data.hotel_name,
        src_city:data.src_city,
       hotel_id:data.hotel_id};
    console.log("its hotel details im hotel services"+hotelbookingDetail.user_id);
    Hotels.bookNewHotel( hotelbookingDetail , function(err , results){
        console.log("its booknewhotel in hotel_services");
        if(err){
            console.log("[Kafka] Error booking new hotel")
        }else{
          if(data.user_id){
            UserTrace.addUserActivity(data.user_id,"book hotel");
          }
        }
        callback(err,results);

    });
}
exports.addNewHotel = function(data, callback){
    console.log("In addNewHotel");
    var hotelDetail = new Hotels.Hotels({
        hotel_id: data.hotel_id,
        hotel_name : data.hotel_name ,
        hotel_address : data.hotel_address,
        hotel_city : data.hotel_city,
        hotel_state : data.hotel_state,
        hotel_zip : data.hotel_zip ,
        hotel_stars : data.hotel_stars,
        hotel_room_type : data.hotel_room_type,
        hotel_rating : data.hotel_rating,
        hotel_reviews : data.hotel_reviews,
        hotel_capacity : data.hotel_capacity,
        hotel_price : data.hotel_price
    });
    Hotels.addNewHotel(hotelDetail, function(err , results){
        if(err){
            callback(null,err);
        }
        else{
            console.log("Hotel add data passed to model function");
            callback(null,results);
        }
    });
}


exports.searchHotelsAdmin = function(data, callback){
    console.log("In searchHotelsAdmin");
    Hotels.searchHotelsAdmin( data.hotel_id, data.hotel_name,  function(err , results){
        console.log("result is" + results);
        if(err){
            callback(null,err);
        }
        else{
            console.log("Hotel admin search data passed to model function");
            callback(null,results);
        }
    });
}
exports.deleteHotel = function(data, callback){
    console.log("delete hotel data",data);
    Hotels.deleteCar( data.hotel_id , function(err , results){
        if(err){
            console.log("[Kafka] Error deleting hotel ")
        }
        callback(err,results);
    });
}

exports.updateHotelAdmin = function(data, callback){
    console.log("In update Hotel admin");
    var hotelDetail = {
        hotel_id: data.hotel_id,
        hotel_name : data.hotel_name ,
        hotel_address : data.hotel_address,
        hotel_city : data.hotel_city,
        hotel_state : data.hotel_state,
        hotel_zip : data.hotel_zip ,
        hotel_stars : data.hotel_stars,
        hotel_room_type : data.hotel_room_type,
        hotel_rating : data.hotel_rating,
        hotel_reviews : data.hotel_reviews,
        hotel_capacity : data.hotel_capacity,
        hotel_price : data.hotel_price
    };
    Hotels.updateHotelAdmin(hotelDetail, function(err , results){
        if(err){
            callback(err,null);
        }
        else{
            console.log("Hotel update data passed to model function");
            callback(null,results);
        }
    });
}
