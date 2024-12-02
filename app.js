const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

// Initialize app
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a SQLite database
const db = new sqlite3.Database('./database/holidays.db');

// Get holidays from the database
app.get('/holidays', (req, res) => {
  db.all("SELECT * FROM holidays", [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
