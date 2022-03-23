const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
  '/todo',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ message: 'todos' });
  }
);

module.exports = router;
