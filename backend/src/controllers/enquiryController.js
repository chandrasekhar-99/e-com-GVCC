const db = require('../config/db');


const createEnquiry = (req, res) => {
  try{
    const { product_id, name, email, phone, message } = req.body;
    db.run('INSERT INTO enquiries (product_id, name, email, phone, message) VALUES (?, ?, ?, ?, ?)', [product_id, name, email, phone, message], function(err) {
      if(err){
        throw err;
      }
      res.status(201).json({ id: this.lastID, product_id, name, email, phone, message });
    });
  }catch(err){
    console.error("Error creating enquiry:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllEnquiries = (req, res) => {
  try{
    db.all('SELECT * FROM enquiries',(err, rows) => {
      if(err){
        throw err;
      }
      res.json(rows);
    });
  }catch(err){
    console.error("Error fetching enquiries:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createEnquiry,
  getAllEnquiries
};