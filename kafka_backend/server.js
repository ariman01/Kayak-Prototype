var connection =  new require('./kafka/Connection');
var service_manager = require('./services/service_manager');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var topic_names = require('./config/kafka_topics').getTopicList();
var car_service = require('./services/car_services');
var flight_services = require('./services/flight_services');
var admin_services = require('./services/admin_services');
var producer = connection.getProducer();
var kafka_config = require('./config/kafka_topics')
console.log('[Kafka]server is running');
var mongoURL = "mongodb://localhost:27017/kayak_database";
/*var promise = mongoose.connect(mongoURL, {
    useMongoClient: true
});*/
var mcon = require('./models/MongoConnection');
console.log('[Kafka]server is running');
console.log("kafka_config.CONNECTIONPOOL_IMP",kafka_config.CONNECTIONPOOL_IMP);
console.log("kafka_config.CONNECTIONPOOL_MONGO",kafka_config.CONNECTIONPOOL_MONGO);
if(kafka_config.CONNECTIONPOOL_IMP){
  mcon.create();
}else if(kafka_config.CONNECTIONPOOL_MONGO){
  var promise = mongoose.connect(mongoURL, {
    useMongoClient: true,
    server: { poolSize: 20}
  });
}else{
  var promise = mongoose.connect(mongoURL, {
    useMongoClient: true
  });
}

topic_names.map((topic)=>{
  var consumer = connection.getConsumer(topic);
  consumer.on('message', function (message) {
      console.log('[Kafka] request received, topic: ',topic);
      var data = JSON.parse(message.value);
      service_manager.handle_request(topic, data.data, function(error, result){
        let error_msg = null;
        if(error){
          error_msg = JSON.stringify({
              msg : error
          })
        }
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify(
                  {data : result,
                  correlationId:data.correlationId,
                  error:error_msg}),

                partition : 0
            }
        ];
        console.log("[Kafka] sending response,topic: ",data.replyTo+result);
        producer.send(payloads, function(err, data){
           console.log("its dta in server.js"+data);
        });
      });
  });
});
