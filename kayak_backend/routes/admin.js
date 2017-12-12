var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');
var utils = require('./../util/utils');
var jwt = require('jsonwebtoken');

router.post('/adminsignup', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  let admininfo ={};
  admininfo.username = username;
  admininfo.password = password;
  kafka.make_request('admin_signup', admininfo, function(err , results){
    if(err){
      console.log("error in signing up admin");
    }
    else{
      if(result.status == 201){
        res.send(201).json({result : result});
      }
      else if(result.status == 401){
        res.send(401).json({message : "Admin already exists"});
      }
    }
  });

});

router.post('/adminsignin', function(req, res, next) {
 var username = req.body.username;
 var password = req.body.password;
 let admininfo ={};
 admininfo.username = username;
 admininfo.password = password;
 kafka.make_request('admin_signin', admininfo, function(err , results){
   if(err){
     console.log("error in signing in as admin");
     res.status(401).json({result : {}, message:"Failed to login in kafka error: "+err});
   }
   else{
     console.log("result: ",results);
     if(results.status == 201){
       let userinfo ={};
       userinfo.username = username;
       userinfo.type = "admin";
       const server_token = jwt.sign({uid:username},utils.server_secret_key);
       res.status(201).json({result : {userinfo:userinfo,servertoken:server_token}, message:"Admin Signed in successfully"});
     }else{
       res.status(401).json({result : results.result, message:results.message});
     }
   }
 });
});


router.post('/adminhotelbilling', function(req, res, next) {

      /*var date = new Date(req.body.date);
      var year = date.getFullYear();
      console.log("Year entered is:"+year);
      kafka.make_request('admin_hotel_bill', {"year" : 2017}, function(err,result){

        if(err){
            console.log(err);
            res.status(403).json({result:[],message:err});
        }else {
            res.status(201).json({result:result,message:"Successfully retrieved hotel billing information"});
        }
    });*/
    //Date format YYYY-MM-DD
        var where_clause =  '';
        if( req.body.date){
          where_clause += "where Date(booking_date) = "+"'"+req.body.date+"'";
        }else if(req.body.month){
            var date = new Date();
            var year = date.getFullYear();
            var start_d = year+"-"+req.body.month+"-"+01;
            var end_d = year+"-"+req.body.month+"-"+31;
            where_clause += "where Date(booking_date) between '"+start_d+"' and '"+end_d+"'";
        }else{
          res.status(403).json({result:[],message:"Please select either month or date to get billing information"});
        }
        if(where_clause){
          var hotelbilling="select * from hotel_transaction "+where_clause;
          kafka.make_request('admin_hotel_bill', {query : hotelbilling}, function(err,result){

            if(err){
                console.log(err);
                res.status(403).json({result:[],message:err});
            }else {
                res.status(201).json({result:result,message:"Successfully retrieved hotel billing information"});
            }
        });
        }
});


router.post('/searchhotelsadmin', function(req, res, next) {
    console.log("In search hotels admin");

    var hotel_id = req.body.hotel_id;
    var hotel_name = req.body.hotel_name;

    kafka.make_request('hotel_search_admin',{"hotel_id" : hotel_id , "hotel_name" : hotel_name}, function(err,result){
        if(err){
            console.log("error in searching hotels");
            res.status(403).json({result:result,message:"Admin Failed to search hotel with id :"+hotel_id});
        }
        else{
            console.log("hotel search successful");
            res.status(201).json({result:result,message:"Admin Sucessfully searched hotel with id :"+hotel_id});
        }
    });
});


router.post('/updatehoteladmin', function(req, res, next) {
    console.log("In update hotels");
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


    kafka.make_request('hotel_update_admin', hotelDetail , function(err,result){
        if(err){
            console.log("error in updating hotel");
            res.status(403).json({result:result,message:"Failed to add hotel :"+ hotelDetail.hotel_name});
        }
        else{
            res.status(201).json({result:result,message:"Sucessfully updated hotel :"+hotelDetail.hotel_name});
        }
    });
});

router.post('/searchcarsadmin', function(req, res, next) {
    console.log("In search cars admin");

    var model_no = req.body.model_no?(req.body.model_no).toLowerCase():null;
    var name = req.body.name?(req.body.name).toLowerCase():null;
    if(model_no||name){
      kafka.make_request('car_search_admin',{"model_no" : model_no , "name" : name}, function(err,result){
          if(err){
              console.log("error in searching cars");
              res.status(403).json({result:[],message:"Admin Failed to search car with id :"+model_no});
          }
          else{
              console.log("car search successful");
              res.status(201).json({result:result,message:"Admin Sucessfully searched car with id :"+model_no});
          }
      });
    }else{
      res.status(401).json({result:[],message:"User need to provide either car name or model no to search!!!"});
    }


});

router.post('/updatecaradmin', function(req, res, next) {
    console.log("In update cars");
    var carDetail = {
       model_no : req.body.model_no?(req.body.model_no).toLowerCase():'',
       capacity : req.body.capacity,
       no_of_bags : req.body.no_of_bags,
       name : req.body.name?(req.body.name).toLowerCase():'',
       no_of_doors : req.body.no_of_doors,
       price : req.body.price,
       src_city :req.body.src_city,
       destination_city : req.body.destination_city,
       rental_agency : req.body.rental_agency,
       car_type : req.body.car_type
    };


    kafka.make_request('car_update_admin', carDetail , function(err,result){
        if(err){
            console.log("error in updating car");
            res.status(403).json({result:result,message:"Failed to add hotel :"+ carDetail.model_no});
        }
        else{
            res.status(201).json({result:result,message:"Sucessfully updated car :"+carDetail.model_no});
        }
    });
});

router.post('/searchflightsadmin', function(req, res, next) {
    console.log("In search flights admin");

    var flight_id = req.body.flight_id?req.body.flight_id.toLowerCase():null;
    var carrier_name = req.body.carrier_name?req.body.carrier_name.toLowerCase():null;
    if(flight_id || carrier_name){
      kafka.make_request('flight_search_admin',{"flight_id" : flight_id , "carrier_name" : carrier_name}, function(err,result){
          if(err){
              console.log("error in searching flights");
              res.status(403).json({result:[],message:"Admin Failed to search flight with id :"+flight_id});
          }
          else{
              console.log("flight search successful");
              res.status(201).json({result:result,message:"Admin Sucessfully searched flight with id :"+flight_id});
          }
      });
    }else{
      res.status(401).json({result:[],message:"User need to provide either flight id or flight name to search!!!"});
    }

});

router.post('/updateflightadmin', function(req, res, next) {
    console.log("In update flight");
    var flightDetail = {
       flight_id : req.body.flight_id?req.body.flight_id.toLowerCase():'',
       carrier_name : req.body.carrier_name?req.body.carrier_name.toLowerCase():'',
       src_city : req.body.src_city?req.body.src_city.toLowerCase():'',
       destination_city : req.body.destination_city?req.body.destination_city.toLowerCase():'',
       flight_duration : req.body.flight_duration,
       operational_day : req.body.operational_day,
       departure_time :req.body.departure_time,
       price : req.body.price
    };


    kafka.make_request('flight_update_admin', flightDetail , function(err,result){
        if(err){
            console.log("error in updating flight");
            res.status(403).json({result:result,message:"Failed to update flight :"+ flightDetail.flight_id});
        }
        else{
            res.status(201).json({result:result,message:"Sucessfully updated flight :"+flightDetail.flight_id});
        }
    });
});



router.post('/admincarbilling', function(req, res, next) {
  //Date format YYYY-MM-DD
      var where_clause =  '';
      if( req.body.date){
        where_clause += "where Date(booking_date) = "+"'"+req.body.date+"'";
      }else if(req.body.month){
          var date = new Date();
          var year = date.getFullYear();
          var start_d = year+"-"+req.body.month+"-"+01;
          var end_d = year+"-"+req.body.month+"-"+31;
          where_clause += "where Date(booking_date) between '"+start_d+"' and '"+end_d+"'";
      }else{
        res.status(403).json({result:[],message:"Please select either month or date to get billing information"});
      }
      if(where_clause){
        var carbilling="select * from car_transaction "+where_clause;
        kafka.make_request('admin_car_bill', {query : carbilling}, function(err,result){

          if(err){
              console.log(err);
              res.status(403).json({result:[],message:err});
          }else {
              res.status(201).json({result:result,message:"Successfully retrieved car billing information"});
          }
      });
      }

});

router.post('/adminflightbilling', function(req, res, next) {
      //Date format YYYY-MM-DD
      var where_clause =  '';
      if( req.body.date){
        where_clause += "where Date(booking_date) = "+"'"+req.body.date+"'";
      }else if(req.body.month){
          var date = new Date();
          var year = date.getFullYear();
          var start_d = year+"-"+req.body.month+"-"+01;
          var end_d = year+"-"+req.body.month+"-"+31;
          where_clause += "where Date(booking_date) between '"+start_d+"' and '"+end_d+"'";
      }else{
        res.status(403).json({result:[],message:"Please select either month or date to get billing information"});
      }
      if(where_clause){
        var flightbilling="select * from flight_transaction "+where_clause;
        kafka.make_request('admin_flight_bill', {query : flightbilling}, function(err,result){

          if(err){
              console.log(err);
              res.status(403).json({result:[],message:err});
          }else {
              res.status(201).json({result:result,message:"Successfully retrieved flight billing information"});
          }
        });
      }
});

router.post('/getadminprofile',function(req, res, next){
    var admininfo = {};
    admininfo.username = req.body.username;

    kafka.make_request('admin_details', admininfo , function(err,result){
        if(!err){
            console.log('result*****',result);
            //console.log("user signed up ",result);
            if(result.code === 201){
              res.status(201).json({result:result});
            }else{
              res.status(401).json
            }
        }else{
            res.status(401).json({result:[]});
        }
    });
});

router.post('/updateadmindetails',function(req, res, next){
    var admininfo = {};
    admininfo.username = req.body.username;
    admininfo.password = req.body.password;
    admininfo.first_name = req.body.first_name;
    admininfo.last_name = req.body.last_name;
    admininfo.address = req.body.address;
    admininfo.city = req.body.city;
    admininfo.zip = req.body.zip;
    admininfo.state = req.body.state;
    admininfo.phone = req.body.phone;

    console.log("admininfo: " , admininfo);

    kafka.make_request('update_admin', admininfo , function(err,result){
        if(!err){
            console.log('result*****',result);
            //console.log("user signed up ",result);
            if(result.code === 201){
              res.status(201).json(result);
            }
            else{
              res.status(401).json({result:[],message:"details not found"});
            }
        }else{
            res.status(401).json({});
        }
    });
});




module.exports = router;
