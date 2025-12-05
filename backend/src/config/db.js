require('dotenv').config();
const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');



const isRender = process.env.RENDER=== 'true';

const dbDir = isRender ? '/tmp': path.resolve(__dirname, '../../db'); 
const dbPath = path.join(dbDir, 'database.sqlite');


if (!isRender) {
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
}

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, "");
  console.log("SQLite DB created at:", dbPath);
}
const db = new Database(dbPath);

module.exports = db;