const mongoose = require('mongoose');

var growlSchema = {
  Title: String,
  Content: String,
  Poster Icon: String,
  Poster Name: String,
  Poster Handle: String,
  Post: String,
  Timestamp: Number
};

var Growl = mongoose.model('Growl', growlSchema);

module.exports = Growl;
