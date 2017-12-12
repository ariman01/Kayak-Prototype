var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.post('/searchcars', function(req, res, next) {

  var src_city = (req.body.src_city).toLowerCase() ;
  var destination_city = (req.body.destination_city).toLowerCase();
  var user_id = req.body.user_id?req.body.user_id:'';

  kafka.make_request('car_search',{"src_city" : src_city , "destination_city" : destination_city,user_id:user_id}, function(err,result){
    if(err){
      console.log("error in searching cars");
    }
    else{
      console.log("its result in car model"+result.src_city);
      res.status(201).json({result:result});
    }
  });
});

router.post('/addcar', function(req, res, next) {
  console.log("addcar data: ",req.body.model_no);
  var cardetail = {
    model_no:req.body.model_no,
    name:req.body.name,
    capacity:req.body.capacity,
    no_of_bags:req.body.no_of_bags,
    no_of_doors:req.body.no_of_doors,
    price:req.body.price,
    src_city:req.body.src_city,
    destination_city:req.body.destination_city,
    rental_agency:req.body.rental_agency,
    car_type:req.body.car_type
  };
  kafka.make_request('add_car',cardetail, function(err,result){
    if(err){
      console.log("[Node Server] Error adding new car, error: ",err);
      res.status(403).json({message:"Failed to add car: "+cardetail.name+" try again!!!"})
    }
    else{
      res.status(201).json({result:result,message:"successfully Added car:"+cardetail.name});
    }
  });
});
router.post('/bookcar', function(req, res, next) {
    console.log("bookcar data: ",req.body.car_name);
    var carbookingdetail = {
        user_id:req.body.user_id,
        booking_date:req.body.booking_date,
        booking_amount:req.body.booking_amount,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        name:req.body.name,
        src_city:req.body.src_city,
        destination_city:req.body.destination_city,
        rental_agency:req.body.rental_agency
    };
    kafka.make_request('car_book',carbookingdetail, function(err,result){
        if(err){
            console.log("[Node Server] Error booking car, error: ",err);
            res.status(403).json({message:"Failed to book a car: "+carbookingdetail.car_name+" try again!!!"})
        }
        else{
            res.status(201).json({result:result,message:"successfully booked car:"+carbookingdetail.car_name});
        }
    });
});
router.post('/deletecar', function(req, res, next) {
  var cardetail = {
    model_no:req.body.model_no
  };
  kafka.make_request('delete_car',cardetail, function(err,result){
    if(err){
      console.log("[Node Server] Error deleteing car, error: ",err);
      res.status(403).json({message:"Failed to delete car: "+cardetail.model_no+" try again!!!"})
    }
    else{
      res.status(201).json({result:result,message:"successfully deleted car: "+cardetail.model_no});
    }
  });
});

router.post('/editcar', function(req, res, next) {
  var cardetail = {
    model_no:req.body.model_no,
    name:req.body.name,
    capacity:req.body.capacity,
    no_of_bags:req.body.no_of_bags,
    no_of_doors:req.body.no_of_doors,
    price:req.body.price,
    src_city:req.body.src_city,
    destination_city:req.body.destination_city,
    rental_agency:req.body.rental_agency,
    car_type:req.body.car_type
  };
  kafka.make_request('edit_car',cardetail, function(err,result){
    if(err){
      console.log("[Node Server] Error editing car, error: ",err);
      res.status(403).json({message:"Failed to edit car: "+cardetail.model_no+" try again!!!"})
    }
    else{
      res.status(201).json({result:result,message:"successfully edited car: "+cardetail.model_no});
    }
  });
});

module.exports = router;
