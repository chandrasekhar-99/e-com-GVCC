const db = require('../config/db');


const getAllProducts = (req, res) => {
  try{
    const stmt = db.prepare('SELECT * FROM products');
    const products = stmt.all();
    res.json(products);
  }catch(err){
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM products WHERE id = ?');
    const product = stmt.get(req.params.id);
    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  
};

module.exports = {
  getAllProducts,
  getProductById
};