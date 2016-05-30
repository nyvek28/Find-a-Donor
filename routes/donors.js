var express = require('express');
var router = express.Router();
var path = require('path');
var donorCtrl = require('./../controllers/donorCtrl');

/* GET home page. */
router.get('/donors', donorCtrl.get);

router.post('/donors', function(req, res, next){
  res.send('Hello');
});

module.exports = router;
