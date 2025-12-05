const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');


const dbDir = path.resolve(__dirname, '../../db');
const dbPath = path.resolve(dbDir, 'database.sqlite');


if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  fs.writeFileSync(dbPath, '');
}

const db = new Database(dbPath);

module.exports = db;