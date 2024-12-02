const db = require('./database');

const getAllHolidays = () => {
  const stmt = db.prepare('SELECT * FROM holidays');
  return stmt.all();
};

const getHolidayById = (id) => {
  const stmt = db.prepare('SELECT * FROM holidays WHERE id = ?');
  return stmt.get(id);
};

const createHoliday = (name, date) => {
  const stmt = db.prepare('INSERT INTO holidays (name, date) VALUES (?, ?)');
  return stmt.run(name, date);
};

const updateHoliday = (id, name, date) => {
  const stmt = db.prepare('UPDATE holidays SET name = ?, date = ? WHERE id = ?');
  return stmt.run(name, date, id);
};

const deleteHoliday = (id) => {
  const stmt = db.prepare('DELETE FROM holidays WHERE id = ?');
  return stmt.run(id);
};

module.exports = {
  getAllHolidays,
  getHolidayById,
  createHoliday,
  updateHoliday,
  deleteHoliday
};
