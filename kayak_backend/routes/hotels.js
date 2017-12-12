var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.post('/searchhotels', function(req, res, next) {
    console.log("In search hotels");

    var hotel_city = (req.body.src_city).toLowerCase() ;
    //var hotel_capacity = (req.body.capacity).toLowerCase() ;
    var user_id = req.body.user_id?req.body.user_id:'';
    kafka.make_request('hotel_search',{"hotel_city" : hotel_city,user_id:user_id}, function(err,result){
        if(err){
            console.log("error in searching hotels");
            res.status(403).json({result:result,message:"Failed to search hotel in city :"+hotel_city});
        }
        else{
            console.log("hotel search successful");
            res.status(201).json({result:result,message:"Sucessfully searched hotel in city :"+hotel_city});
        }
    });
});
router.post('/bookhotel', function(req, res, next) {
    console.log("bookhotel data: ",req.body.hotel_name);
    var hotelbookingdetail = {
        user_id:req.body.user_id,
        booking_date:req.body.booking_date,
        booking_amount:req.body.booking_amount,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        hotel_name:req.body.hotel_name,
        src_city:req.body.src_city,
        hotel_id:req.body.hotel_id
    };
    kafka.make_request('hotel_book',hotelbookingdetail, function(err,result){
        if(err){
            console.log("[Node Server] Error booking hotel, error: ",err);
            res.status(403).json({message:"Failed to book a hotel: "+hotelbookingdetail.hotel_name+" try again!!!"})
        }
        else{
            res.status(201).json({result:result,message:"successfully booked hotel:"+hotelbookingdetail.hotel_name});
        }
    });
});

router.post('/addhotel', function(req, res, next) {
    console.log("In add hotels");
    var hotelDetail = {
       hotel_id : req.body.hotel_id,
       hotel_name : req.body.hotel_name,
       hotel_address : req.body.hotel_address,
       hotel_city : req.body.hotel_city,
       hotel_state : req.body.hotel_state,
       hotel_zip : req.body.hotel_zip,
       hotel_stars :req.body.hotel_stars,
       hotel_room_type : req.body.hotel_room_type,
       hotel_rating : req.body.hotel_rating,
       hotel_reviews : req.body.hotel_reviews,
       hotel_capacity : req.body.hotel_capacity,
       hotel_price : req.body.hotel_price
    };


    kafka.make_request('hotel_add', hotelDetail , function(err,result){
        if(err){
            console.log("error in adding hotel");
            res.status(403).json({result:result,message:"Failed to add hotel :"+ hotelDetail.hotel_name});
        }
        else{
            res.status(201).json({result:result,message:"Sucessfully added hotel :"+hotelDetail.hotel_name});
            console.log("Request for hotel addition sent to kafka make request function");
        }
    });
});

router.post('/deletehotel', function(req, res, next) {
  var hoteldetail = {
    hotel_id:req.body.hotel_id
  };
  kafka.make_request('delete_hotel',hoteldetail, function(err,result){
    if(err){
      console.log("[Node Server] Error deleteing hotel, error: ",err);
      res.status(403).json({message:"Failed to delete hotel: "+hoteldetail.hotel_id+" try again!!!"})
    }
    else{
      res.status(201).json({result:result,message:"successfully deleted car: "+hoteldetail.hotel_id});
    }
  });
});

module.exports = router;
