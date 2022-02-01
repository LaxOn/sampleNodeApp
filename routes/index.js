var express = require('express');
const path = require('path');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/html/index.html'))
});

// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname,'../public/html/index.html'))
// });
module.exports = router


// const express = require('express');
// let router = express.Router();
// let gateway = require('../gateway/gateway');

// router.get('/valuation/:vin',gateway);
// // http://localhost:4400/api/JM1BL1V75D1852484/wholesale&retail&generic/default

// module.exports = router;