const express = require('express');
const Router = express.Router();
require('dotenv').config();



Router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    res.json({ message: 'Login successful', token: process.env.ADMIN_TOKEN_SECRET });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = Router;