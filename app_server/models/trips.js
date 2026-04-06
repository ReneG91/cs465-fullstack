const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: String,
  length: String,
  price: String,
  description: String
});

module.exports = mongoose.model('trips', tripSchema);