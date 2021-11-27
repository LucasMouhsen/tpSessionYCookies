var express = require('express');
var router = express.Router();
var {index, welcome, logout, olvidar} = require("../controllers/indexController")
const validations = require('../validations/indexLogin');
/* GET home page. */
router.get('/', index);
router.post('/', validations, welcome);
router.get('/logout', logout);
router.post('/logout', olvidar);

module.exports = router;
