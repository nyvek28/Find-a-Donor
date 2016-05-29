var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donorSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  phone: String
});

var Donor = new mongoose.model('Donor', donorSchema);

module.exports = Donor;
