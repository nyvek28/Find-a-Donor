var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/donors');
var port = 8080;
var Donor = require('./models/donor');
var connections = [];

server.listen(8000);

//Refactor!!!
mongoose.connect('mongodb://localhost/donor');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/////Testing!
// var Dan = new Donor({
//   firstName: 'Dan',
//   lastName: 'Jones',
//   email: 'dan@jones.com',
//   address: 'New York',
//   phone: '99098876'
// });
//
// Dan.save(function(err){
//   if(err) throw err;
//
//   console.log(Dan.firstName + ' ' + Dan.lastName + ' was saved!');
// });
//
// Donor.find({}, function(err, donors){
//   if(err) throw err;
//
//   console.log(donors);
// });
//////

app.listen(port,function(){
  console.log('Magic happens at port ' + port);
});

module.exports = app;
