// backend/middleware/auth.js

const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.user = decoded.user;
    next();
  });
};

module.exports = authenticateToken;