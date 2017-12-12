var mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/kayak_database";
var kafka_config = require('./../config/kafka_topics')
var self;
function MongoConnection() {
  self = this;
  this.connections = [];
  this.connectionStatus = [];
  this.queue = []

  this.create = function(){
      this.count = 0;
      for(var index = 0 ; index < kafka_config.POOL_LIMIT; index ++){
        console.log("New Mongo Connection count:"+(index+1));
        mongoose.connect(mongoURL, {useMongoClient: true}, function(err, db){

          self.connections.push(db);
          self.connectionStatus.push(true);
        });
      }
    }

    this.getMongoConnection = function(callback) {
        for(var index = 0 ; index < this.connectionStatus.length; index ++){
          console.log("checking for connection:",index, "connections:");
          if(this.connectionStatus[index]){
            this.connectionStatus[index] = false;
            console.log("connection available :",index);
            callback(this.connections[index], index);
            return;
          }
       }
       this.queue.push(callback);
    };

    this.closeConnection = function(index) {
      console.log("[Kafka] Closing mongo connection no - "+(index+1));
        if(this.queue.length > 0){
          this.queue[0](this.connections[index], index);
           this.queue.splice(0,1);
        }else{
          this.connectionStatus[index] = true;
        }
    };
}
exports = module.exports = new MongoConnection;
