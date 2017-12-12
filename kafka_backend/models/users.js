var mysql = require('./mysql');
var bcrypt = require('bcrypt');
var UserTrace = require('./../models/user_trace');
var salt = bcrypt.genSaltSync(10);


function addNewUser(userdetail, callback) {
    console.log("its userdetails in usermodel" + userdetail.username + userdetail.password);
    var checkUser = "select * from users where email='" + userdetail.username + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else if (result.length>0) {
            console.log("user already ther");
            var response= {code:401,message:'User already exists'};
            callback(null,response);
        }
        else if (result.length==0) {
            var passwordToSave = bcrypt.hashSync(userdetail.password, salt);
            var addUser = "INSERT INTO users(email,password) VALUES ('" + userdetail.username + "','" + passwordToSave + "')";
            console.log("query is" + addUser);
            mysql.fetchData(function (err, result) {
                if (err) {
                    throw err;
                    callback(null,response);
                }
                else {
                    var response = {result:result,code:201,message:'User Successfully Created'};
                    callback(null,response);
                }
            }, addUser);
        }
    }, checkUser);
}

function addNewUserAdmin(userdetail, callback) {

    var checkUser = "select * from users where email='" + userdetail.email + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else if (result.length>0) {
            console.log("user already there");
            var response= {code:401,message:'User already exists'};
            callback(null,response);
        }
        else if (result.length==0) {
            var passwordToSave = bcrypt.hashSync(userdetail.password, salt);
            var addUser = "INSERT INTO users(email,password,first_name,last_name,address,city,state,zip,phone) VALUES ('" + userdetail.email + "','" + passwordToSave + "','" +userdetail.first_name+ "','" + userdetail.last_name+ "','" + userdetail.address+ "','" + userdetail.city+ "','" +userdetail.state+"','"+ userdetail.zip+ "','" + userdetail.phone+"')";
            console.log("query is" + addUser);
            mysql.fetchData(function (err, result) {
                if (err) {
                    throw err;
                    callback(null,response);
                }
                else {
                    var response = {result:result,code:201,message:'User Successfully Created'};
                    callback(null,response);
                }
            }, addUser);
        }
    }, checkUser);
}

function searchUser(userdetail,callback){
//  var findUser ="SELECT * FROM users where email='paaaz@gmail.com'"
  var findUser = "select * from users where email='" + userdetail.email + "'";
  mysql.fetchData(function(err,result){
    if(err){
      throw err;
    }
    else if(result.length == 0){
      console.log("user doesn't exist");
      var response= {code:401,message:'User doesnt exists'};
      callback(null,response);
    }
    else if(result.length > 0){
      console.log("[kafka]User found results:"+result[0].password);
      var response= {code:201,result:result[0]};
      callback(null,response);
    }
  },findUser);
}

function updateUser (userdetail,callback){
  var updateUser = "UPDATE users SET first_name = '"+userdetail.first_name+"',"+
                        "last_name = '"+userdetail.last_name+"',"+
                        "address = '"+userdetail.address+"',"+
                        "city = '"+userdetail.city+"',"+
                        "state = '"+userdetail.state+"',"+
                        "zip = '"+userdetail.zip+"',"+
                        "phone = '"+userdetail.phone+"'"+
                        "where email='"+userdetail.email+"'";

  mysql.fetchData(function(err,result){
    if(err){
      throw err;
    }
    else{
      var response= {code:201,result:result};
      callback(null,response);
    }
  },updateUser);

}

function getUserDetails(userdetail, callback) {
    console.log("its userdetails in usermodel" + userdetail.email);
    var getUser = "select * from users where email='" + userdetail.email + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else
        {
            console.log("its result in model user"+result.first_name);
            var response = {result,code:201,message:'User details found'};
            callback(null,response);
        }
    }, getUser);
}
function get_user_card(userdetail, callback) {
    console.log("its userdetails in usermodel" + userdetail.email);
    var getUserCard = "SELECT kayak_database.users.email,kayak_database.users.first_name,kayak_database.users.last_name,kayak_database.users.address,kayak_database.users.city,kayak_database.users.state,kayak_database.users.zip,kayak_database.users.phone,kayak_database.card_payment.name_on_card,kayak_database.card_payment.card_number,kayak_database.card_payment.card_type,kayak_database.card_payment.cvv FROM ( kayak_database.card_payment right outer join kayak_database.users on kayak_database.card_payment.email = kayak_database.users .email ) where kayak_database.users.email ='"+userdetail.email+"'";
        mysql.fetchData(function (err, result) {
          if (err) {
            throw err;
        }
        else
        {
            console.log("its result in model user"+result);
            var response = {result,code:201,message:'User details found'};
            callback(null,response);
            if(userdetail.email){
              UserTrace.addUserActivity(userdetail.email,"booking page");
            }


        }
    }, getUserCard);
}
function deleteUserAccount(userdetail, callback) {
    console.log("its userdetails in usermodel" + userdetail.email);
    var deleteUser = "DELETE FROM users where email='" + userdetail.email + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else
        {
            console.log("its result in model user"+result);
            var response = {result,code:201,message:'User details found'};
            callback(null,response);
        }
    }, deleteUser);
}
function editUserDetails(userdetail, callback) {
    console.log("its userdetails in model user"+userdetail.first_name+userdetail.phone);
    var editUser= "UPDATE users SET first_name='"+userdetail.first_name+"',last_name='"+userdetail.last_name+"',address='"+userdetail.address+"',city='"+userdetail.city+"',state='"+userdetail.state+"',zip='"+userdetail.zip+"',phone='"+userdetail.phone+"' WHERE email='"+userdetail.email+"'";

    //var editUser = "INSERT INTO users(email,first_name,last_name,address,city,state,zip,phone) VALUES ('" + userdetail.email + "','" + userdetail.first_name + "','" + userdetail.last_name + "','" + userdetail.address + "','" + userdetail.city + "','" + userdetail.state + "','" + userdetail.zip + "','" + userdetail.phone + "')";
    console.log("query is" + editUser);
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
            callback(null,response);
        }
        else {
            var response = {result:result,code:201,message:'User Successfully Edited'};
            callback(null,response);
        }
    }, editUser);
}
function getCardDetails(carddetail, callback) {
    console.log("its carddetails in usermodel" + carddetail.email);
    var getCard = "select * from card_payment where email='" + carddetail.email + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else
        {
            console.log("its result in model user"+result);
            var response = {result,code:201,message:'Card details found'};
            callback(null,response);
        }
    }, getCard);
}
function editCardDetails(carddetail, callback) {
    console.log("its carddetails in model user"+carddetail.email+carddetail.card_number);
    var editCard= "UPDATE card_payment SET name_on_card='"+carddetail.name_on_card+"',card_number='"+carddetail.card_number+"',card_type='"+carddetail.card_type+"',address='"+carddetail.address+"',city='"+carddetail.city+"',state='"+carddetail.state+"',zip='"+carddetail.zip+"' WHERE email='"+carddetail.email+"'";
    console.log("query is" + editCard);
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
            callback(null,response);
        }
        else {
            var response = {result:result,code:201,message:'Card Successfully Edited'};
            callback(null,response);
        }
    }, editCard);
}
function addCardDetails(carddetail, callback) {
    console.log("its carddetails in usermodel" + carddetail.email + carddetail.card_number);
            var addCard = "INSERT INTO card_payment(email,name_on_card,card_number,card_type,address,city,state,zip) VALUES ('" + carddetail.email + "','" + carddetail.name_on_card + "','" + carddetail.card_number + "','" + carddetail.card_type + "','" + carddetail.address + "','" + carddetail.city + "','" + carddetail.state + "','" + carddetail.zip + "')";
            console.log("query is" + addCard);
            mysql.fetchData(function (err, result) {
                if (err) {
                    throw err;
                    callback(null,response);
                }
                else {
                    var response = {result:result,code:201,message:'Card Successfully Added'};
                    callback(null,response);
                }
            }, addCard);
}
/*function getUserHistory(userdetail, callback) {
  var finalResult = [];
    console.log("its userhistory in usermodel" + userdetail.email);
    var getCars = "SELECT * from car_transaction where car_transaction.user_id='"+userdetail.email+"'";
    mysql.fetchData(function (err, result1) {
        if (err) {
            throw err;
        }
        else
        { //console.log("its flight",result1);
          finalResult.push({cars:result1});
          var getFlights = "SELECT * from flight_transaction where flight_transaction.user_id='"+userdetail.email+"'";
          mysql.fetchData(function (err, result2) {
            if (err) {
                throw err;
            }
            else
            {
              //console.log("its flight",result2);
              finalResult.push({flights:result2});
              var getHotels = "SELECT * from hotel_transaction where hotel_transaction.user_id='"+userdetail.email+"'";
              mysql.fetchData(function (err, result3) {
                if (err) {
                    throw err;
                }
                else
                {
                  //console.log("its flight",result3);
                  finalResult.push({hotels:result3});
                }
            }, getHotels);

            }
        }, getFlights);
            console.log("its finalResult in user model"+finalResult[0]['cars']);
            //console.log("its finalResult in user model"+finalResult[1]['flights']);
            //console.log("its finalResult in user model"+finalResult[2]['hotels']);
            var response = {result:finalResult,code:201,message:'User details found'};
            callback(null,response);
        }
    }, getCars);
}*/
function getuserhistoryCars(userdetail,callback)
{
  console.log("its userhistory in usermodel" + userdetail.email);
    var getCars = "SELECT * from car_transaction where car_transaction.user_id='"+userdetail.email+"'";
          mysql.fetchData(function (err, result) {
            if (err) {
            throw err;
        }
        else
        {
            var response = {result:result,code:201,message:'User details found'};
            callback(null,response);
        }
    }, getCars);
}
function getuserhistoryFlights(userdetail,callback)
{
  console.log("its userhistory in usermodel" + userdetail.email);
    var getFlights = "SELECT * from flight_transaction where flight_transaction.user_id='"+userdetail.email+"'";
        mysql.fetchData(function (err, result) {
            if (err) {
            throw err;
        }
        else
        {
            var response = {result:result,code:201,message:'User details found'};
            callback(null,response);
        }
    }, getFlights);
}
function getuserhistoryHotels(userdetail,callback)
{
  console.log("its userhistory in usermodel" + userdetail.email);
    var getHotels = "SELECT * from hotel_transaction where hotel_transaction.user_id='"+userdetail.email+"'";
          mysql.fetchData(function (err, result) {
            if (err) {
            throw err;
        }
        else
        {
            var response = {result:result,code:201,message:'User details found'};
            callback(null,response);
        }
    }, getHotels);
}
function deleteUser (userdetail,callback){
  var deleteUser = "delete from kayak_database.users where email='"+userdetail.email+"'";

  mysql.fetchData(function(err,result){
    if(err){
      throw err;
    }
    else{
      var response= {code:201,result:result};
      callback(null,response);
    }
  },deleteUser);

}


module.exports.addNewUser = addNewUser;
module.exports.searchUser = searchUser;
module.exports.addNewUserAdmin = addNewUserAdmin;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.getUserDetails=getUserDetails;
module.exports.getCardDetails=getCardDetails;
module.exports.editUserDetails=editUserDetails;
module.exports.addCardDetails=addCardDetails;
module.exports.editCardDetails=editCardDetails;
module.exports.deleteUserAccount = deleteUserAccount;
module.exports.get_user_card=get_user_card;
module.exports.getuserhistoryHotels =getuserhistoryHotels;
module.exports.getuserhistoryFlights=getuserhistoryFlights;
module.exports.getuserhistoryCars=getuserhistoryCars;
