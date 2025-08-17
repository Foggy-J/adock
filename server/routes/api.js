const express = require('express');
const router = express.Router();

// API Routes
const adminRoutes = require('./api/admin');
router.use('/admin', adminRoutes);
const appsRoutes = require('./api/apps');
router.use('/apps', appsRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'API endpoint' });
});

module.exports = router;