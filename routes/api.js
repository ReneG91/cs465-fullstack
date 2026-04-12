const express = require('express');
const router = express.Router();
const ctrlApi = require('../app_server/controllers/api');

router.get('/trips', ctrlApi.tripsList);
router.get('/trips/:tripId', ctrlApi.tripsFindById);

module.exports = router;