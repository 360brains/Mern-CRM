const express = require('express');
const router = express.Router()
const {signupValidator ,signinValidator, validatorResult} = require('../middleware/validator')
const {signupController , signinController, featchUsers} = require("../controllers/auth");
const User = require('../models/User');

router.post('/signup', signupValidator , 
validatorResult , signupController);

router.post('/signin', signinValidator , 
validatorResult , signinController);

router.get('/alluser',featchUsers)

module.exports = router