const holidayModel = require('../models/holidayModel');

function getAllHolidays(req, res) {
    const holidays = holidayModel.getAllHolidays();
    res.json(holidays);
}

function getHolidayById(req, res) {
    const id = req.params.id;
    const holiday = holidayModel.getHolidayById(id);
    if (holiday) {
        res.json(holiday);
    } else {
        res.status(404).send('Holiday not found');
    }
}

function addHoliday(req, res) {
    const { name, date } = req.body;
    const info = holidayModel.addHoliday(name, date);
    res.status(201).json(info);
}

function updateHoliday(req, res) {
    const id = req.params.id;
    const { name, date } = req.body;
    const info = holidayModel.updateHoliday(id, name, date);
    res.json(info);
}

function deleteHoliday(req, res) {
    const id = req.params.id;
    const info = holidayModel.deleteHoliday(id);
    res.json(info);
}

module.exports = {
    getAllHolidays,
    getHolidayById,
    addHoliday,
    updateHoliday,
    deleteHoliday
};
