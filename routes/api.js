const express = require('express');
const router = express.Router();
const ctrlApi = require('../app_server/controllers/api');
const authCtrl = require('../app_server/controllers/auth');
const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({
  secret: 'MY_SECRET_KEY',
  algorithms: ['HS256']
});

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

router.get('/trips', ctrlApi.tripsList);
router.get('/trips/:tripId', ctrlApi.tripsFindById);

router.post('/trips', auth, ctrlApi.tripsAddTrip);
router.put('/trips/:tripId', auth, ctrlApi.tripsUpdateTrip);
router.delete('/trips/:tripId', auth, ctrlApi.tripsDeleteTrip);

module.exports = router;