var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');


router.post('/searchflights', function(req, res, next) {
    console.log(req.body.start_date);
    var d = new Date(req.body.start_date);
    var day = d.getDay();
    console.log("its date in body"+d+"day"+day);
    var details = { "src_city": req.body.src_city,
        "destination_city":req.body.destination_city,
        "operational_day":day
    };
    if(req.body.user_id){
      details.user_id = req.body.user_id;
    }
    kafka.make_request('flight_search',details, function(err,result){
        if(err){
            console.log(err);
        }else {
            res.status(201).json({result:result});
        }
    });
});

router.post('/bookflight', function(req, res, next) {
    console.log("bookflight data: ",req.body.flight_name);
    var flightbookingdetail = {
        user_id:req.body.user_id,
        booking_date:req.body.booking_date,
        booking_amount:req.body.booking_amount,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        flight_name:req.body.flight_name,
        src_city:req.body.src_city,
        destination_city:req.body.destination_city,
        flight_id:req.body.flight_id
    };
    kafka.make_request('flight_book',flightbookingdetail, function(err,result){
        if(err){
            console.log("[Node Server] Error booking flight, error: ",err);
            res.status(403).json({message:"Failed to book a flight: "+flightbookingdetail.flight_name+" try again!!!"})
        }
        else{
            res.status(201).json({result:result,message:"successfully booked flight:"+flightbookingdetail.flight_name});
        }
    });
});

router.post('/addflight', function(req, res, next) {
    var flightDetail = {
        flight_id:req.body.flight_id?req.body.flight_id.toLowerCase():'',
        carrier_name:req.body.carrier_name?req.body.carrier_name.toLowerCase():'',
        src_city:req.body.src_city?req.body.src_city.toLowerCase():'',
        destination_city:req.body.destination_city?req.body.destination_city.toLowerCase():'',
        flight_duration:req.body.flight_duration,
        operational_day:req.body.operational_day,
        departure_time:req.body.departure_time,
        price:req.body.price
    };
    kafka.make_request('add_flight', flightDetail, function(err,result){
        if(err){
            console.log("[Node Server] Error adding new flight, error: ",err);
            res.status(403).json({message:"Failed to add new flight: "+flightDetail.carrier_name+" try again!!!"})
        }
        else{
            res.status(201).json({result:result,message:"successfully Added car:"+flightDetail.carrier_name});
        }
    });
});

router.post('/deleteflight', function(req, res, next) {
    var flightDetail = {
        flight_id:req.body.flight_id
    };
    kafka.make_request('delete_flight', flightDetail, function(err,result){
        if(err){
            console.log("[Node Server] Error deleteing flight, error: ",err);
            res.status(403).json({message:"Failed to delete flight: "+flightDetail.flight_id+" try again!!!"})
        }
        else{
            res.status(201).json({result:result,message:"successfully deleted flight:"+flightDetail.flight_id});
        }
    });
});

router.post('/editflight', function(req, res, next) {
    var flightDetail = {
        flight_id:req.data.flight_id,
        carrier_name:req.data.carrier_name,
        src_city:req.data.src_city,
        destination_city:req.data.destination_city,
        flight_duration:req.data.flight_duration,
        operational_day:req.data.operational_day,
        departure_time:req.data.departure_time,
        price:req.data.price
    };
    kafka.make_request('edit_flight', flightDetail, function(err,result){
        if(err){
            console.log("[Node Server] Error editing, error: ",err);
            res.status(403).json({message:"Failed to editflight: "+flightDetail.carrier_name+" try again!!!"})
        }
        else{
            res.status(201).json({result:result,message:"successfully editted flight:"+flightDetail.carrier_name});
        }
    });
});

module.exports = router;
