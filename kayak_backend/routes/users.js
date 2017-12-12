var express = require('express');
var bcrypt = require('bcrypt');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var LocalStrategy = require('passport-local').Strategy;
var kafka = require('./../kafka/client');
var utils = require('./../util/utils');


var router = express.Router();
const saltRnd = 3;

passport.use('login',new LocalStrategy(
    function(username, password, done) {
        console.log("LocalStrategy Username: ",username,"password: ",password);
        let res_result = {message:'',
            servertoken:'',
            status:401
        };
        kafka.make_request('signin',{"email":username}, function(err,result){
            if(err){
                throw err;
            }else{
                console.log("user login result:",result);
                if(result.result){
                    if(bcrypt.compareSync(password, result.result.password)){
                      console.log("user login compareSync:",result);
                        const server_token = jwt.sign({uid:result.result.email},utils.server_secret_key);
                        res_result.servertoken = server_token;
                        res_result.userinfo = {firstname:result.result.first_name,username:result.result.email
                        };
                        res_result.message = "User logged in ... ";
                        res_result.status = 201;
                    }else{
                        res_result.message = "Wrong password !!!";
                    }
                    done(null,res_result);
                }else{
                    res_result.message = "User does not exists !!!";
                    done(null,res_result);
                }
            }
        });
    }));


router.post('/login', function(req, res, next) {
  console.log("in login request");
    passport.authenticate('login', function(err, result) {
        if(!err && result.status == 201) {
            return res.status(201).json(result);

        }else{
            return res.status(401).json(result);
        }

    })(req, res);

});


router.post('/signup',function(req, res, next){
    let res_result = {};
    let userinfo = {};
    userinfo.username = req.body.username;
    userinfo.password = req.body.password;
    res_result.code = 401;

    kafka.make_request('signup',{"userinfo":userinfo}, function(err,result){
        if(!err){
            //console.log("user signed up ",result);
            if(result.code === 201){
              const server_token = jwt.sign({uid:userinfo.username},utils.server_secret_key);
              res_result.userinfo = {username:userinfo.username}
              res_result.servertoken = server_token;
              res_result.code =201;
              res_result.message = "User signed up successfully ... ";
              res.status(201).json(res_result);
            }else{
              res_result.message = result.message;
              res.status(405).json(res_result);
            }

        }else{
            res.status(401).json({message:"Server error failed to signup new user try again later"});
        }
    });
});


router.post('/adduser',function(req, res, next){
    var userinfo = {};
    userinfo.email = req.body.email;
    userinfo.password = req.body.password;
    userinfo.first_name = req.body.first_name;
    userinfo.last_name = req.body.last_name;
    userinfo.address = req.body.address;
    userinfo.city = req.body.city;
    userinfo.state = req.body.state;
    userinfo.zip = req.body.zip;
    userinfo.phone = req.body.phone;

    kafka.make_request('add_user', userinfo , function(err,result){
        if(!err){
            //console.log("user signed up ",result);
            if(result.code === 201){
              res.status(201).json(result);
            }
            else if(result.code === 401){
              res.status(401).json(result);
            }
        }else{
            res.status(403).json({});
        }
    });
});

router.post('/searchuser',function(req, res, next){
    var userinfo = {};
    userinfo.email = req.body.email;

    kafka.make_request('search_user', userinfo , function(err,result){
        if(!err){
            console.log('result*****',result);
            //console.log("user signed up ",result);
            if(result.code === 201){
              res.status(201).json(result);
            }else{
              res.status(401).json({result:[],message : result.message});
            }
        }else{
            res.status(401).json({result:[],message : "user not found"});
        }
    });
});


router.post('/updateuserdetails',function(req, res, next){
    var userinfo = {};
    userinfo.email = req.body.email;
    userinfo.first_name = req.body.first_name;
    userinfo.last_name = req.body.last_name;
    userinfo.address = req.body.address;
    userinfo.city = req.body.city;
    userinfo.zip = req.body.zip;
    userinfo.state = req.body.state;
    userinfo.phone = req.body.phone;


    kafka.make_request('update_user', userinfo , function(err,result){
        if(!err){
            console.log('result*****',result);
            //console.log("user signed up ",result);
            if(result.code === 201){
              res.status(201).json(result);
            }
        }else{
            res.status(401).json({});
        }
    });
});

router.post('/deleteuser',function(req, res, next){
    var userinfo = {};
    userinfo.email = req.body.email;

    kafka.make_request('delete_user', userinfo , function(err,result){
        if(!err){
            console.log('result*****',result);
            //console.log("user signed up ",result);
            if(result.code === 201){
              res.status(201).json(result);
            }
        }else{
            res.status(401).json({});
        }
    });
});
router.post('/getuserdetails',function(req, res, next){
    var email = (req.body.email).toLowerCase();
    kafka.make_request('getuser_details',{"email" : email }, function(err,result){
        if(err){
            console.log("error in searching user details");
        }
        else{
            console.log("its result in user routes"+result);
            res.status(201).json(result);
        }
    });
});
router.post('/getcarddetails',function(req, res, next){
    var email = (req.body.email).toLowerCase();
    kafka.make_request('getcard_details',{"email" : email }, function(err,result){
        if(err){
            console.log("error in searching card details");
        }
        else{
            console.log("its result in card routes"+result);
            res.status(201).json(result);
        }
    });
});
router.post('/getusercarddetails',function(req, res, next){
    var email = (req.body.email).toLowerCase();

    kafka.make_request('get_user_card_details',{"email" : email }, function(err,result){
        if(err){
            console.log("error in searching card details");
        }
        else{
            console.log("its result in card routes"+result.card_type);
            res.status(201).json(result);
        }
    });


});
router.post('/getuserhistorycars',function(req, res, next){
    var email = (req.body.email).toLowerCase();
    kafka.make_request('getuserhistoryCars',{"email" : email }, function(err,result){
        if(err){
            console.log("error in searching user history cars");
        }
        else{
            console.log("its result in user routes"+result);
            res.status(201).json(result);
        }
    });
});
router.post('/getuserhistoryflights',function(req, res, next){
    var email = (req.body.email).toLowerCase();
    kafka.make_request('getuserhistoryFlights',{"email" : email }, function(err,result){
        if(err){
            console.log("error in searching user history flights");
        }
        else{
            console.log("its result in user routes"+result);
            res.status(201).json(result);
        }
    });
});
router.post('/getuserhistoryhotels',function(req, res, next){
    var email = (req.body.email).toLowerCase();
    kafka.make_request('getuserhistoryHotels',{"email" : email }, function(err,result){
        if(err){
            console.log("error in searching user history hotels");
        }
        else{
            console.log("its result in user routes"+result);
            res.status(201).json(result);
        }
    });
});
router.post('/edituserdetails',function(req, res, next){
    let userinfo = {};
    userinfo.email = req.body.email;
    userinfo.first_name = req.body.first_name;
    userinfo.last_name = req.body.last_name;
    userinfo.address = req.body.address;
    userinfo.city = req.body.city;
    userinfo.state = req.body.state;
    userinfo.zip = req.body.zip;
    userinfo.phone=req.body.phone;
    kafka.make_request('edituser_details',{"userinfo" : userinfo }, function(err,result){
        if(err){
            console.log("error in editing user details");
        }
        else{
            console.log("its result in user routes"+result);
            res.status(201).json(result);
        }
    });
});
router.post('/addcarddetails',function(req, res, next){
    let cardinfo = {};
    cardinfo.email = req.body.email;
    cardinfo.name_on_card = req.body.name_on_card;
    cardinfo.card_number = req.body.card_number;
    cardinfo.card_type = req.body.card_type;
    cardinfo.address=req.body.address;
    cardinfo.city = req.body.city;
    cardinfo.state = req.body.state;
    cardinfo.zip = req.body.zip;
    kafka.make_request('addcard_details',{"cardinfo" : cardinfo }, function(err,result){
        if(err){
            console.log("error in adding card details");
        }
        else{
            console.log("its result in card routes"+result);
            res.status(201).json(result);
        }
    });
});
router.post('/editcarddetails',function(req, res, next){
    let cardinfo = {};
    cardinfo.email = req.body.email;
    cardinfo.name_on_card = req.body.name_on_card;
    cardinfo.card_number = req.body.card_number;
    cardinfo.card_type = req.body.card_type;
    cardinfo.address=req.body.address;
    cardinfo.city = req.body.city;
    cardinfo.state = req.body.state;
    cardinfo.zip = req.body.zip;
    kafka.make_request('editcard_details',{"cardinfo" : cardinfo }, function(err,result){
        if(err){
            console.log("error in editing card details");
        }
        else{
            console.log("its result in card routes"+result);
            res.status(201).json(result);
        }
    });
});
router.post('/deleteuseraccount',function(req, res, next){
    var email = (req.body.user_id).toLowerCase();
    kafka.make_request('deleteuser',{"email" : email }, function(err,result){
        if(err){
            console.log("error in deleting user");
        }
        else{
            console.log("its result in user routes"+result);
            res.status(201).json(result);
        }
    });
});


module.exports = router;
