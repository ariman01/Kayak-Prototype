var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userTraceSchema = new Schema({
  user_id:{
    type:String,
    required : true
  },
  activity_type:{
    type:String,
    required : true
  },
  time:{
    type:Date,
    required : true
  }
});

const UserTrace = mongoose.model('usertrace',userTraceSchema);
function addUserActivity(user_id, activity, callback){
    console.log("[Kafka] Adding user activity",user_id,"activity",activity);
    let activityObj = new UserTrace({user_id:user_id,activity_type:activity,time:new Date()});
    activityObj.save(callback);
}


function searchUserTrace(user, callback){

  console.log("searchCar:",user);
  UserTrace.find({user_id:user}, callback);

}


module.exports.addUserActivity = addUserActivity;
module.exports.searchUserTrace = searchUserTrace;
module.exports.UserTrace = UserTrace;
