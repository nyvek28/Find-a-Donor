
var Donor = require('./../models/donor');
var uuid = require('uudi');

module.exports.create = function(req, res){
  var donor = new Donor();
  donor.linkid = uuid.v4();
  console.log(donor.linkid);
  donor.firstName = req.body.firstName;
  donor.lastName = req.body.lastName;
  donor.email = req.body.email;
  donor.address = req.body.address;
  donor.phone = req.body.phone;

  donor.save(function(err){
    if(err) throw err;
    res.send(donor);
  });
};

module.exports.read = function(req, res){
  Donor.find({linkid: req.body.linkid}, function(err, donor){
    if(err) throw err;
    res.send(donor);
  });
};

module.exports.update = function(req, res){
  Donor.find({linkid: req.body.linkid}, function(err, donor){
    if(err) throw err;
    donor.firstName = req.body.firstName;
    donor.lastName = req.body.lastName;
    donor.email = req.body.email;
    donor.address = req.body.address;
    donor.phone = req.body.phone;
    donor.save(function(err){
      if(err) throw err;
      res.send(donor);
    });
  });
};
