var ejs= require('ejs');
var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port
function getConnection(){
	var connection = mysql.createConnection({
	    host     : 'localhost',
	    user     : 'root',
	    password : 'root',
	    database : 'test',
	    port	 : 3306,
	    Pooling  : true
	});
	return connection;
}


function InsertData(sqlQuery)
{
	
console.log("Query is:"+sqlQuery);

// query is executing
var connection = getConnection();

connection.query(sqlQuery, function(err, rows, fields) {
	if(err){
		console.log("Hiii22");
		console.log("ERROR: " + err.message);
	}
	else 
	{	// return err or result
		console.log("Hiii33");
		console.log("DB Results:"+rows);
		//callback(err, rows);
	}
});
console.log("Hiii444");
console.log("\nConnection closed..");
connection.end();

}

function fetchData(callback,sqlQuery){
	
	console.log("\nSQL Query::"+sqlQuery);
	
	var connection=getConnection();
	
	connection.query(sqlQuery, function(err, rows, fields) {
		if(err){
			console.log("Hiii22");
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("Hiii33");
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
	console.log("Hiii444");
	console.log("\nConnection closed..");
	connection.end();
}	

exports.fetchData=fetchData;
exports.InsertData=InsertData;