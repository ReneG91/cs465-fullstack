const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('../models/users');
const secret = 'MY_SECRET_KEY';

const generateJWT = function(user) {
  return jwt.sign(
    {
      email: user.email,
      id: user._id
    },
    secret,
    {
      expiresIn: '1h'
    }
  );
};

module.exports.register = async function(req, res) {
  try {
    const user = new User({
      email: req.body.email
    });

    user.setPassword(req.body.password);
    await user.save();

    res.status(201).json({
      token: generateJWT(user)
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.login = async function(req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email
    });

    if (!user || !user.validPassword(req.body.password)) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    res.status(200).json({
      token: generateJWT(user)
    });
  } catch (err) {
    res.status(500).json(err);
  }
};