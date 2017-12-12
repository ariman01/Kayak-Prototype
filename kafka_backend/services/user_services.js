var Users = require('./../models/users')

exports.addUser = function(data, callback){
    var userDetail = {
        username:data.userinfo.username,
        password:data.userinfo.password
        };
    Users.addNewUser( userDetail , function(err , results){
        if(err){
            console.log("[Kafka] Error adding new user")
        }
        console.log("its result in user_services"+results);
        callback(err,results);
    });
}


exports.addUserAdmin = function(data, callback){
    var userDetail = {
        email:data.email,
        password:data.password,
        first_name: data.first_name,
        last_name : data.last_name,
        address : data.address,
        city : data.city,
        state : data.state,
        zip : data.zip,
        phone : data.phone
        };
    Users.addNewUserAdmin( userDetail , function(err , results){
        if(err){
            console.log("[Kafka] Error adding new user");
        }
        console.log("its result in user_services"+results);
        callback(err,results);
    });
}

exports.searchUserAdmin = function(data, callback){
    var userDetail = {
        email:data.email,
        };
    Users.searchUser( userDetail , function(err , results){
        if(err){
            console.log("[Kafka] Error searching new user")
            callback(err,null);
        }else{
          console.log("its result in user_services"+results);
          callback(null,results);
        }
    });
}

exports.updateUserAdmin = function(data, callback){
    Users.updateUser( data , function(err , results){
        if(err){
            console.log("[Kafka] Error searching new user")
            callback(err,null);
        }else{
          console.log("its result in user_services"+results);
          callback(null,results);
        }
    });
}

exports.deleteUserAdmin = function(data, callback){
    Users.deleteUser( data , function(err , results){
        if(err){
            console.log("[Kafka] Error searching new user")
            callback(err,null);
        }else{
          console.log("its result in user_services"+results);
          callback(null,results);
        }
    });
}
exports.deleteuser = function(data, callback){
    var userDetail = {
        email:data.email
    };
    Users.deleteUserAccount( userDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error deleting user")
        }
        console.log("its result in user_services"+result);
        callback(err,result);
    });
}
exports.getuserdetails = function(data, callback){
    var userDetail = {
        email:data.email
    };
    Users.getUserDetails( userDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error getting user details")
        }
        console.log("its result in user_services"+result);
        callback(err,result);
    });
}
exports.edituserdetails = function(data, callback){
    var userDetail = {
        email:data.userinfo.email,
        first_name:data.userinfo.first_name,
        last_name:data.userinfo.last_name,
        address:data.userinfo.address,
        city:data.userinfo.city,
        state:data.userinfo.state,
        zip:data.userinfo.zip,
        phone:data.userinfo.phone
    };
    Users.editUserDetails( userDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error editing user details")
        }
        console.log("its result in user_services"+result);
        callback(err,result);
    });
}
exports.getcarddetails = function(data, callback){
    var cardDetail = {
        email:data.email
    };
    Users.getCardDetails( cardDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error getting card details")
        }
        console.log("its result in user_services"+result);
        callback(err,result);
    });
}
exports.addcarddetails = function(data, callback){
    var cardDetail = {
        email:data.cardinfo.email,
        name_on_card:data.cardinfo.name_on_card,
        card_number:data.cardinfo.card_number,
        card_type:data.cardinfo.card_type,
        address:data.cardinfo.address,
        city:data.cardinfo.city,
        state:data.cardinfo.state,
        zip:data.cardinfo.zip,

    };
    Users.addCardDetails( cardDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error adding user details")
        }
        console.log("its result in user_services"+result);
        callback(err,result);
    });
}
exports.editcarddetails = function(data, callback){
    var cardDetail = {
        email:data.cardinfo.email,
        name_on_card:data.cardinfo.name_on_card,
        card_number:data.cardinfo.card_number,
        card_type:data.cardinfo.card_type,
        address:data.cardinfo.address,
        city:data.cardinfo.city,
        state:data.cardinfo.state,
        zip:data.cardinfo.zip,

    };
    Users.editCardDetails( cardDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error editing user details")
        }
        console.log("its result in user_services"+result);
        callback(err,result);
    });
}
exports.getuserhistoryCars = function(data, callback){
    var userDetail = {
        email:data.email
    };
    Users.getuserhistoryCars( userDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error getting user history")
        }
        callback(err,result);
    });
}
exports.getuserhistoryFlights = function(data, callback){
    var userDetail = {
        email:data.email
    };
    Users.getuserhistoryFlights( userDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error getting user history")
        }
        callback(err,result);
    });
}
exports.getuserhistoryHotels = function(data, callback){
    var userDetail = {
        email:data.email
    };
    Users.getuserhistoryHotels( userDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error getting user history")
        }
        callback(err,result);
    });
}
exports.get_user_card= function(data, callback){
    var userDetail = {
        email:data.email
    };
    Users.get_user_card( userDetail , function(err , result){
        if(err){
            console.log("[Kafka] Error getting user history")
        }
        console.log("its result in user_services"+result);
        callback(err,result);
    });
}
