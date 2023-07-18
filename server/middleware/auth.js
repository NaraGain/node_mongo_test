const jwt = require('jsonwebtoken');


module.exports = async (req,res,next)=>{
    try {
        //get the token from the authorization header
        const token = await request.headers.authorization.split(" ")[1];
        const decodeToken = await jwt.verify(token,process.env.JWTtoken);
        //retrive the user details of logged in user
        const user = await decodeToken
        req.user = user
        next()

    } catch (error) {
        res.status(401).json({
            error: new Error("Invail request!"),
        });
    }
};


  