const express = require('express');
const router = express.Router()
const {createRole , getRoles} = require("../controllers/roles");
const { authenticateJWT } = require('../middleware/authenticator');


router.post('/', createRole);
router.get('/', authenticateJWT, getRoles);


module.exports =  router
