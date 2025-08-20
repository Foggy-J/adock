const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const passport = require('./utils/passport');
const { isAuthenticated } = require('./utils/authCheck');

// Load environment variables
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
app.use(cookieParser());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // Set to true if using HTTPS
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  },
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.get('/', isAuthenticated, (req, res) => {
  const userInfo = axios.get(`${process.env.AUTHORIZATION_URL.replace('/auth', '/userinfo')}`, {
    headers: {
      Authorization: `Bearer ${req.user.accessToken}`,
    },
  });
  userInfo.then(response => {
    res.json({ user: response.data, accessToken: req.user.accessToken, refreshToken: req.user.refreshToken });
  }).catch(error => {
    res.redirect('/auth/login');
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${process.env.BASE_URL}`);
});