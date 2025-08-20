const express = require('express');
const router = express.Router();
const passport = require('../utils/passport');

router.get('/login', passport.authenticate('oauth2', {
  session: true,
  successReturnToOrRedirect: '/',
  failureRedirect: '/auth/login',
}));

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect(`${process.env.AUTHORIZATION_URL.replace('/auth', '/logout')}`));
});

module.exports = router;