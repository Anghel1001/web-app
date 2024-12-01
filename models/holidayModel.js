const db = require('./database');

function getAllHolidays() {
    const statement = db.prepare('SELECT * FROM holidays');
    return statement.all();
}

function getHolidayById(id) {
    const statement = db.prepare('SELECT * FROM holidays WHERE id = ?');
    return statement.get(id);
}

function addHoliday(name, date) {
    const statement = db.prepare('INSERT INTO holidays (name, date) VALUES (?, ?)');
    const info = statement.run(name, date);
    return info;
}

function updateHoliday(id, name, date) {
    const statement = db.prepare('UPDATE holidays SET name = ?, date = ? WHERE id = ?');
    const info = statement.run(name, date, id);
    return info;
}

function deleteHoliday(id) {
    const statement = db.prepare('DELETE FROM holidays WHERE id = ?');
    const info = statement.run(id);
    return info;
}

module.exports = {
    getAllHolidays,
    getHolidayById,
    addHoliday,
    updateHoliday,
    deleteHoliday
};
