const express = require('express');
const passport = require('passport');
const router = express.Router();

const secure = passport.authenticate('jwt', { session: false });

router.get('/me', secure, async (req, res) => {
  try {
    const { username } = req.user;
    res.json({ username });
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
