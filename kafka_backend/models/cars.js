var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mysql = require('./mysql');
var mcon = require('./MongoConnection');
var kafka_config = require('./../config/kafka_topics')

var carSchema = new Schema({
  model_no:{
    type:String,
    required : true
  },
  capacity:{
    type:Number,
    required : true
  },
  no_of_bags:{
    type:Number,
    required : true
  },
  name:{
    type:String,
    required:true
  },
  no_of_doors:{
    type:Number,
    required : true
  },
  price:{
    type:Number,
    required : true
  },
  src_city:{
    type:String,
    required : true
  },
  destination_city:{
    type:String,
    required : true
  },
  rental_agency:{
    type:String,
    required : true
  },
  car_type:{
    type:String,
    required : true
  }
});

const Cars = mongoose.model('cars',carSchema);
function addNewCar(cardetail, callback){
    console.log("[Kafka] car model adding new car:",cardetail);
    cardetail.save(callback);
}
function bookNewCar(carbookdetail, callback){
    console.log("its in book new car"+carbookdetail.user_id);
    var bookCar = "INSERT INTO car_transaction(user_id,src_city,destination_city,agency_name,car_name,booking_date,booking_amount,start_date,end_date) VALUES ('" + carbookdetail.user_id + "','" + carbookdetail.src_city + "','" + carbookdetail.destination_city + "','" + carbookdetail.rental_agency + "','" + carbookdetail.name + "','" + carbookdetail.booking_date + "','" + carbookdetail.booking_amount + "','" + carbookdetail.start_date + "','" + carbookdetail.end_date + "')";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else(result)
        {
            console.log("its result after mysql query"+result);
            callback(null,result);
        }
    }, bookCar);
    console.log("[Kafka] car model booking new car:",carbookdetail);
}

function searchCars(src_city, destination_city, callback){
  var query = {};
  if(src_city)
    query.src_city = src_city;
  if(destination_city)
    query.destination_city = destination_city;
  console.log("searchCar:",query);
  //Cars.find(query, callback);
  if(kafka_config.CONNECTIONPOOL_IMP){
    mcon.getMongoConnection(function(con,index){
      Cars.find(query, callback);
        mcon.closeConnection(index);
      });
  }else{
    Cars.find(query, callback);
  }

}

function deleteCar(model_no, callback){
  Cars.deleteOne({model_no:model_no}, callback);
}

function updateCar(car_model_no,cardetail, callback){
  Cars.update({ model_no: car_model_no}, {$set: cardetail}, callback);
}

function searchCarsAdmin(model_no, name, callback){
  var query = {};
  if(model_no)
    query.model_no = model_no;
  if(name)
    query.name = name;
  console.log("searchCarAdmin:",query);
  Cars.find(query, callback);
}


function updateCarAdmin(carDetail,callback){
  Cars.update({model_no : carDetail.model_no},{$set:{
    capacity : carDetail.capacity,
    no_of_bags :carDetail.no_of_bags,
    name :carDetail.name,
    no_of_doors :carDetail.no_of_doors,
    price :carDetail.price,
    src_city :carDetail.src_city,
    destination_city :carDetail.destination_city,
    rental_agency :carDetail.rental_agency,
    car_type :carDetail.car_type
  }},callback);
}


module.exports.addNewCar = addNewCar;
module.exports.searchCars = searchCars;
module.exports.deleteCar = deleteCar;
module.exports.updateCar = updateCar;
module.exports.searchCarsAdmin = searchCarsAdmin;
module.exports.updateCarAdmin = updateCarAdmin;
module.exports.Cars = Cars;

module.exports.bookNewCar = bookNewCar;
module.exports.Cars = Cars;
