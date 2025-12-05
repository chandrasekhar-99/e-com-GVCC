const express = require('express');
const Router = express.Router();
const {getAllProducts, getProductById} = require('../controllers/productController');


Router.get('/products', getAllProducts);
Router.get('/products/:id', getProductById);

module.exports = Router;