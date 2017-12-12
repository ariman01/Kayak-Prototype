var jwt = require('jsonwebtoken');

const server_secret_key = "aqswdefrgthyjukilop";

function checkLoggedInUser(req,res,next){
    const tokenheader = req.body.servertoken || req.headers['servertoken'];

    if (tokenheader) {
        jwt.verify(tokenheader, server_secret_key, function(err, decoded){
            if (!err) {
                req.body.uidfromtoken = decoded.uid;
            }
            next();
        });
    }else{
        next();
    }

}

exports.checkLoggedInUser = checkLoggedInUser;
exports.server_secret_key = server_secret_key;
