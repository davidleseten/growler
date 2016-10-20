const mongoose = require('mongoose');

var growlSchema = {
  title: String,
  content: String,
  posterIcon: String,
  posterName: String,
  posterHandle: String,
  post: String,
  timestamp: Number
};

var Growl = mongoose.model('Growl', growlSchema);

module.exports = Growl;
