const db = require('./database');

const getAllHolidays = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM holidays', [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const addHoliday = (name, date) => {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO holidays (name, date) VALUES (?, ?)',
      [name, date],
      function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });
};

module.exports = { getAllHolidays, addHoliday };
