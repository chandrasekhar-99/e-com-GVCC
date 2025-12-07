require("dotenv").config();

const auth = (req, res, next) => {
  const header = req.headers["authorization"];

  if (!header) {
    return res.status(401).json({ error: "No token provided" });
  }

  
  const token = header.replace("Bearer", "").trim();

  if (token === process.env.ADMIN_TOKEN_SECRET.trim()) {
    return next();
  }

  return res.status(403).json({ error: "Invalid token" });
};

module.exports = auth;
