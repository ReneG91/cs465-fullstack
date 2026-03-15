module.exports.home = function (req, res) {
  res.render('traveler', { title: 'Travlr Getaways' });
};

module.exports.about = function (req, res) {
  res.render('about', { title: 'About' });
};

module.exports.contact = function (req, res) {
  res.render('contact', { title: 'Contact' });
};

module.exports.meals = function (req, res) {
  res.render('meals', { title: 'Meals' });
};

module.exports.news = function (req, res) {
  res.render('news', { title: 'News' });
};

module.exports.rooms = function (req, res) {
  res.render('rooms', { title: 'Rooms' });
};

module.exports.travel = function (req, res) {
  res.render('travel', { title: 'Travel' });
};