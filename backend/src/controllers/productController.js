const db = require('../config/db');


const getAllProducts = (req, res) => {
  try{
    db.all('SELECT * FROM products',(err, rows) => {
      if(err){
        throw err;
      }
      res.json(rows);
    });
  }catch(err){
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = (req, res) => {
  try{
    const productId = parseInt(req.params.id, 10);
    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    db.get('SELECT * FROM products WHERE id = ?', [productId], (err, row) => {
      if(err){
        throw err;
      }
      res.json(row);
    });
  }catch(err){
    console.error("Error fetching product by ID:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById
};