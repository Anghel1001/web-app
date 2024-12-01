const { getAllHolidays, addHoliday } = require('../models/holidayModel');

const getHolidays = async (req, res) => {
  try {
    const holidays = await getAllHolidays();
    res.json(holidays);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch holidays' });
  }
};

const createHoliday = async (req, res) => {
  const { name, date } = req.body;

  if (!name || !date) {
    return res.status(400).json({ error: 'Name and date are required' });
  }

  try {
    const id = await addHoliday(name, date);
    res.status(201).json({ message: 'Holiday added successfully', id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add holiday' });
  }
};

module.exports = { getHolidays, createHoliday };
