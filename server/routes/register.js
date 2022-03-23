const express = require('express');
const router = express.Router();

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

  const newUser = new User({ username, password });
  const savedUser = await newUser.save().catch((err) => {
    console.log('Error', err);
  });

  if (savedUser) {
    res.json({ message: 'Thank you for registering!' });
  }
});
module.exports = router;
