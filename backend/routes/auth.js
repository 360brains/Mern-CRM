const express = require('express');
const router = express.Router()
const {signupValidator ,signinValidator, validatorResult} = require('../middleware/validator')
const {signupController , signinController, fetchUsers , readUser} = require("../controllers/auth");
const { authenticateJWT } = require('../middleware/authenticator');

router.post('/signup', signupValidator , 
validatorResult , signupController);

router.post('/signin', signinValidator , 
validatorResult , signinController);

router.get('/alluser',authenticateJWT,fetchUsers)

router.get('/', authenticateJWT, readUser);


module.exports = router