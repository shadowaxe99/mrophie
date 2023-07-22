// backend/server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

// Error handling middleware
app.use(require('./middleware/error'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});