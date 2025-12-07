require("dotenv").config();

const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ error: "Invalid authorization format" });
  }

  
  console.log("Received token:", token);
  console.log("ENV token:", process.env.ADMIN_TOKEN_SECRET);

  if (token === process.env.ADMIN_TOKEN_SECRET) {
    return next();
  }

  return res.status(403).json({ error: "Invalid token" });
};

module.exports = auth;
