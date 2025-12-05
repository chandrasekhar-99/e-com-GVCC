require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require('./src/routes/productRoutes');
const  initDB  = require('./src/utils/initDB');


const app = express();
const PORT = process.env.PORT || 3000;

initDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/v1', productRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World! GVCC Backend Server is running.");
  console.log("Root endpoint was hit");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

