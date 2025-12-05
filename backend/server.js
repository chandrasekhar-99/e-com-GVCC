require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require('./src/routes/productRoutes');
const enquiryRoutes = require('./src/routes/enquiryRoutes');
const adminRoutes = require('./src/routes/adminRoute');
const  initDB  = require('./src/utils/initDB');


const app = express();
const PORT = process.env.PORT || 3000;

initDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', productRoutes);
app.use('/api/v1', enquiryRoutes);
app.use('/api/v1', adminRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World! GVCC Backend Server is running.");
  console.log("Root endpoint was hit");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

