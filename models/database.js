const Database = require('better-sqlite3');
const db = new Database('./data/mydatabase.db', { verbose: console.log });
db.prepare('SELECT 1').get();
module.exports = db;
