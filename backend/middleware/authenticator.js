
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()



exports.authenticateJWT = (req, res, next) => {

  let token = req.headers.authorization;
  if (!token) {
      return res.status(401).json({
          errorMessage: 'Authentication denied'
      })
  }

  try {
      token = token.split(' ')[1];
      const decode = jwt.verify(token, process.env.JWTSECRET)
      req.user = decode.user
      next()
  } catch (error) {
      console.log("jwt error", error);
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


