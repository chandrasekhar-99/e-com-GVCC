const db = require('../config/db');


const createEnquiry = (req, res) => {
  try {
    const { product_id, name, email, phone, message } = req.body;

    if(!product_id || !name || !email || !phone || !message){
      return res.status(400).json({ error: "All fields are required" });
    }
    const stmt = db.prepare('INSERT INTO enquiries (product_id, name, email, phone, message) VALUES (?, ?, ?, ?, ?)');

    const info = stmt.run(product_id, name, email, phone, message);

    res.status(201).json({ id: info.lastInsertRowid, product_id, name, email, phone, message });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const getAllEnquiries = (req, res) => {
  try{
    const stmt = db.prepare('SELECT * FROM enquiries');
    const enquiries = stmt.all();
    res.json(enquiries);
  }catch(err){
    console.error("Error fetching enquiries:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createEnquiry,
  getAllEnquiries
};