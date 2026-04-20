const express = require('express');
const router = express.Router();
const ctrlApi = require('../app_server/controllers/api');

router.get('/trips', ctrlApi.tripsList);
router.post('/trips', ctrlApi.tripsAddTrip); //
router.get('/trips/:tripId', ctrlApi.tripsFindById);
router.put('/trips/:tripId', ctrlApi.tripsUpdateTrip);
router.delete('/trips/:tripId', ctrlApi.tripsDeleteTrip);

module.exports = router;
