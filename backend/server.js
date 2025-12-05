require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World! GVCC Backend Server is running.");
  console.log("Root endpoint was hit");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

