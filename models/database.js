const path = require("path");
const db = new (require("better-sqlite3"))(path.resolve(__dirname, "../database.db"), {
  verbose: console.log,  
});

console.log("Connected to the SQLite database.");

module.exports = db;
