var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var donorSchema = new Schema({
  linkid: String,
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  phone: String
});

//console.log('Hello');

var Donor = mongoose.model('Donor', donorSchema);


module.exports = Donor;
