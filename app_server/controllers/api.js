const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

module.exports.tripsList = async function (req, res) {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.tripsAddTrip = async function (req, res) {
  try {
    const trip = await Trip.create({
      name: req.body.name,
      length: req.body.length,
      price: req.body.price,
      description: req.body.description
    });

    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.tripsFindById = async function (req, res) {
  try {
    const trip = await Trip.findById(req.params.tripId);
    res.json(trip);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.tripsUpdateTrip = async function (req, res) {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.tripId,
      {
        name: req.body.name,
        length: req.body.length,
        price: req.body.price,
        description: req.body.description
      },
      { new: true }
    );
    res.json(trip);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.tripsDeleteTrip = async function (req, res) {
  try {
    await Trip.findByIdAndDelete(req.params.tripId);
    res.status(204).json();
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.tripsFindById = async function (req, res) {
  try {
    const trip = await Trip.findById(req.params.tripId);

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json(err);
  }
};