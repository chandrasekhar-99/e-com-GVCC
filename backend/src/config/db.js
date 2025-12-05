require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');



const isRender = process.env.RENDER === 'true';
const dbDir = isRender ? '/tmp' : path.resolve(__dirname, '../../db');
const dbPath = path.join(dbDir, 'database.sqlite');


if (!isRender && !fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

if (!fs.existsSync(dbPath)) {
  fs.closeSync(fs.openSync(dbPath, 'w'));
  console.log('SQLite DB created at:', dbPath);
}

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  }else {
    console.log('Connected to SQLite database at:', dbPath);
  }
});

module.exports = db;