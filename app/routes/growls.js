const mongoose = require('mongoose');
const express = require('express');
var router = express.Router();
var Growl = require('../models/growl');

router.get('/', function(req, res, next){
  console.log("Grrrrrrrrrr.");
})


module.exports = router;
