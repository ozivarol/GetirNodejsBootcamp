const jwt =require('jsonwebtoken');

const dotenv =require('dotenv')

if (process.env.NODE_ENV != 'production') {
    dotenv.config();
}
const verifyToken = (req,res,next) => {

    var token = req.header("Authorization")
    if(token==null) res.status(401).send("Token is missig")
    else
    {
       token = token.includes("Bearer") ? token.replace("Bearer ","") : token
       jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
           err ? res.status(403).send(`Invalid token`) : next()
       })
    }
}
module.exports=verifyToken;