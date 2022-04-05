const passport = require('passport');
const passportJwt = require('passport-jwt');

const ExtractJwt = passportJwt.ExtractJwt;
const Strategy = passportJwt.Strategy;

const User = require('../models/User');
//
passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, done) {
      return User.findOne({ where: { id: jwtPayload.id } })
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);
