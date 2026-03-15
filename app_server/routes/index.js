const express = require('express');
const router = express.Router();
const ctrlTravlr = require('../controllers/traveler');

router.get('/', ctrlTravlr.home);
router.get('/about', ctrlTravlr.about);
router.get('/contact', ctrlTravlr.contact);
router.get('/meals', ctrlTravlr.meals);
router.get('/news', ctrlTravlr.news);
router.get('/rooms', ctrlTravlr.rooms);
router.get('/travel', ctrlTravlr.travel);

module.exports = router;
