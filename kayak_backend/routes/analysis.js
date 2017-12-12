var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.post('/one', function(req, res, next) {


		 		var date = new Date(req.body.date);
		 		var year = date.getFullYear();
		 		console.log("Year entered is:"+year);

    kafka.make_request('admin_analysis_hotel', {"year" : year}, function(err,result){
        console.log("err",err,"result",result);
        if(err){
            console.log(err);
        }else {
            res.status(201).json({result:result,message:"Hotel Analysis retrieved succesfully"});
        }
    });
});


router.post('/caranalysis', function(req, res, next) {


		 		var date = new Date(req.body.date);
		 		var year = date.getFullYear();
		 		console.log("Year entered is:"+year);

    kafka.make_request('admin_analysis_car', {"year" : year}, function(err,result){
        console.log("err",err,"result",result);
        if(err){
            console.log(err);
        }else {
            res.status(201).json({result:result,message:"Car Analysis retrieved succesfully"});
        }
    });
});


router.post('/flightanalysis', function(req, res, next) {


		 		var date = new Date(req.body.date);
		 		var year = date.getFullYear();
		 		console.log("Year entered is:"+year);

    kafka.make_request('admin_analysis_flight', {"year" : year}, function(err,result){
        console.log("err",err,"result",result);
        if(err){
            console.log(err);
        }else {
            res.status(201).json({result:result,message:"Flight Analysis retrieved succesfully"});
        }
    });
});

router.get('/admintotalsales', function(req, res, next){
   kafka.make_request('admin_total_sales', {}, function(err , results){
     if(err){
       console.log("error in retrieving total sales information error - ",err);
       res.status(403).json({result:{},message:"Error :"+err});
     }
     else{
       res.status(201).json({result:results,message:"Successfully retrieved total sales information"});
     }
   });
});

router.post('/usertrace', function(req, res, next){
   kafka.make_request('user_trace', {user_id:req.body.user_id}, function(err , results){
     if(err){
       console.log("error in retrieving user trace - ",err);
       res.status(403).json({result:{},message:"Error :"+err});
     }
     else{
       res.status(201).json({result:results,message:"Successfully retrieved user trace"});
     }
   });
});

module.exports = router;
