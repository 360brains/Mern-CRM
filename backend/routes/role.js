const express = require('express');
const router = express.Router()
const {createRole , getRoles, editRole} = require("../controllers/roles");
const { authenticateJWT } = require('../middleware/authenticator');


router.post('/',authenticateJWT, createRole);
router.get('/', authenticateJWT, getRoles);
router.put('/:roleId', editRole);



module.exports =  router
