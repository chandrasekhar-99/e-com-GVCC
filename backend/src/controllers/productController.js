const db = require('../config/db');

const getAllProducts = (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;

    const search = req.query.search || "";
    const categoryFilter = req.query.category || "";

    const sortBy = req.query.sortBy || "id";
    const sortOrder = req.query.sortOrder === "desc" ? "DESC" : "ASC";

    // MAIN QUERY
    let query = "SELECT * FROM products WHERE 1=1";
    const params = [];

    // 🔍 FIXED SEARCH (your table uses title, NOT name)
    if (search) {
      query += " AND (title LIKE ? OR description LIKE ?)";
      params.push(`%${search}%`, `%${search}%`);
    }

    // 📌 CATEGORY FILTER
    if (categoryFilter) {
      query += " AND category = ?";
      params.push(categoryFilter);
    }

    // SORT + PAGINATION
    query += ` ORDER BY ${sortBy} ${sortOrder} LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    console.log("QUERY:", query);
    console.log("PARAMS:", params);

    db.all(query, params, (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to fetch products" });
      }

      // COUNT QUERY
      let countQuery =
        "SELECT COUNT(*) AS count FROM products WHERE 1=1";
      const countParams = [];

      if (search) {
        countQuery += " AND (title LIKE ? OR description LIKE ?)";
        countParams.push(`%${search}%`, `%${search}%`);
      }

      if (categoryFilter) {
        countQuery += " AND category = ?";
        countParams.push(categoryFilter);
      }

      console.log("COUNT QUERY:", countQuery);
      console.log("COUNT PARAMS:", countParams);

      db.get(countQuery, countParams, (countErr, countRow) => {
        if (countErr) {
          console.log(countErr);
          return res.status(500).json({ error: "Failed to fetch product count" });
        }

        res.json({
          page,
          limit,
          products: rows,
          totalCount: countRow.count,
          totalPages: Math.ceil(countRow.count / limit),
        });
      });
    });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);
    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    db.get("SELECT * FROM products WHERE id = ?", [productId], (err, row) => {
      if (err) {
        console.error("Error fetching product:", err);
        return res.status(500).json({ error: "Failed to fetch product" });
      }

      res.json(row);
    });
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
