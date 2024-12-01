const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/db.sqlite3');

// Initialize Table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS holidays (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

const Holiday = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM holidays', [], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  create: (name, description) => {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO holidays (name, description) VALUES (?, ?)`,
        [name, description],
        function (err) {
          if (err) reject(err);
          resolve({ id: this.lastID, name, description });
        }
      );
    });
  },
  update: (id, name, description) => {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE holidays SET name = ?, description = ? WHERE id = ?`,
        [name, description, id],
        function (err) {
          if (err) reject(err);
          resolve({ id, name, description });
        }
      );
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM holidays WHERE id = ?`, [id], function (err) {
        if (err) reject(err);
        resolve();
      });
    });
  },
};

module.exports = Holiday;
