
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

exports.authenticateJWT = (req,res,next) =>{
     
    const token = req.cookies.token
   if(!token){
      return res.status(401).json({
           errorMessage: 'Authentication denied'
       })
   }

   try{
       const decode = jwt.verify(token , process.env.JWTSECRET)
   req.user = decode.user
   next()
   }catch(error){
       console.log("jwt error" , error);
       res.status(401).json({
        errorMessage: 'Invalid token'
    })
   } 
}

