
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const authenticateJWT = (req,res,next) =>{
     
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

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized as an admin')
    }
  }

  module.exports= { authenticateJWT, admin }

