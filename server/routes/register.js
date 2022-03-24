const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

const User = require('../models/User');

router.get('/register', (req, res) => {
  res.send('register');
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  //if user already exists
  const alreadyExistUser = await User.findOne({ where: { username } }).catch(
    (err) => {
      console.log('Error', err);
    }
  );
  if (alreadyExistUser) {
    return res.json({ message: 'User already exists!' });
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ username: username, password: hashedPassword });
  const savedUser = await newUser.save().catch((err) => {
    console.log('Error', err);
  });

  if (savedUser) {
    res.json({ message: 'Thank you for registering!' });
  }
});
module.exports = router;
