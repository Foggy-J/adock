const OAuth2Strategy = require('passport-oauth2');
const dotenv = require('dotenv');
dotenv.config();

module.exports = new OAuth2Strategy({
  state: true,
  authorizationURL: process.env.AUTHORIZATION_URL,
  tokenURL: process.env.TOKEN_URL,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.BASE_URL + '/auth/login',
  passReqToCallback: true,
  scope: 'openid profile email',
}, (req, accessToken, refreshToken, profile, done) => {
  done(null, { accessToken: accessToken, refreshToken: refreshToken});
});