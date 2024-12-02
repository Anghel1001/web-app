const db = require('./models/database');

// Create holidays table
const createTable = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS holidays (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      date TEXT NOT NULL
    );
  `;
  db.exec(createTableQuery);
  console.log('Holidays table created or already exists.');
};

createTable();
