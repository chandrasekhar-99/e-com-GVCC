require('dotenv').config();


const auth = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  if (token === `Bearer ${process.env.ADMIN_TOKEN_SECRET}`) {
    next();
  } else {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = auth;