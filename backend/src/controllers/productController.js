const db = require('../config/db');


const getAllProducts = (req, res) => {
  try{
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;

    const search = req.query.search || '';

    const categoryFilter = req.query.category || '';

    const sortBy = req.query.sortBy || 'id';
    const sortOrder = req.query.sortOrder === 'desc' ? 'DESC' : 'ASC';

    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];
    if (search) {
      query += ' AND (name LIKE ? OR title LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    if (categoryFilter) {
      query += ' AND category = ?';
      params.push(categoryFilter);
    }
    query += ` ORDER BY ${sortBy} ${sortOrder} LIMIT ? OFFSET ?`;
    params.push(limit, offset);


    db.all(query, params, (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to fetch products" });
      }

      const totalCountQuery = 'SELECT COUNT(*) as count FROM products WHERE 1=1' + (search ? ' AND (name LIKE ? OR description LIKE ?)' : '') + (categoryFilter ? ' AND category = ?' : '');
      const countParams = [];

      if (search) {
        countParams.push(`%${search}%`, `%${search}%`);
      }

      if (categoryFilter) {
        countParams.push(categoryFilter);
      }

      db.get(totalCountQuery, countParams, (countErr, countRow) => {
        if (countErr) {
          console.log(countErr);
          return res.status(500).json({ error: "Failed to fetch product count" });
        }

        res.json({
          page,
          limit,
          products: rows,
          totalCount: countRow.count,
          totalPages: Math.ceil(countRow.count / limit)
        });
      });
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