const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

module.exports.tripsList = async function (req, res) {
  try {
    const trips = await Trip.find({});
    res.json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};