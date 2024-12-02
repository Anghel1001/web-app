const holidayModel = require('../models/holidayModel');

const getAllHolidays = (req, res) => {
  const holidays = holidayModel.getAllHolidays();
  res.json(holidays);
};

const getHolidayById = (req, res) => {
  const holiday = holidayModel.getHolidayById(req.params.id);
  if (holiday) {
    res.json(holiday);
  } else {
    res.status(404).send('Holiday not found');
  }
};

const createHoliday = (req, res) => {
  const { name, date } = req.body;
  if (name && date) {
    holidayModel.createHoliday(name, date);
    res.status(201).send('Holiday created');
  } else {
    res.status(400).send('Name and date are required');
  }
};

const updateHoliday = (req, res) => {
  const { name, date } = req.body;
  const holiday = holidayModel.getHolidayById(req.params.id);
  if (holiday) {
    holidayModel.updateHoliday(req.params.id, name, date);
    res.send('Holiday updated');
  } else {
    res.status(404).send('Holiday not found');
  }
};

const deleteHoliday = (req, res) => {
  const holiday = holidayModel.getHolidayById(req.params.id);
  if (holiday) {
    holidayModel.deleteHoliday(req.params.id);
    res.send('Holiday deleted');
  } else {
    res.status(404).send('Holiday not found');
  }
};

module.exports = {
  getAllHolidays,
  getHolidayById,
  createHoliday,
  updateHoliday,
  deleteHoliday
};
