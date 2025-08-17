const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});