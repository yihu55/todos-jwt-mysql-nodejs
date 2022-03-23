const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } }).catch((err) => {
    console.log('Error', err);
  });

  if (!user) {
    return res.json({ message: 'User and password does not match!' });
  }

  if (user.password !== password) {
    return res.json({ message: 'password does not match' });
  }

  const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({ message: 'Welcome back', token: jwtToken });
});

module.exports = router;