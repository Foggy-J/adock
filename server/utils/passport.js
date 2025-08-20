const passport = require('passport');
const strategy = require('./strategy');

// Passport configuration
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Configure OAuth2 strategy
passport.use(strategy);

module.exports = passport;