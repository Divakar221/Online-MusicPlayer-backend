const jwt = require("jsonwebtoken");

exports.AuthorizeUser = async (req,res,next) => {
    // Check whether access token exists
    if(!req.headers['token']) 
        return res.status(401).send({msg : "Unauthorised : Access Token not found"})
    
    // Verify token
    try{
        req.body.user = await jwt.verify(req.headers['token'], "AGILE");
        next();
    } catch(err) {
        res.status(401).send({msg : "Unauthorised : Invalid Access Token"})
    }
}