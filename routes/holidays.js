// controllers
const holidayModel = require('../models/holidayModel');

// Get all holidays
exports.getAllHolidays = async (req, res) => {
  try {
    const holidays = await holidayModel.getAll();
    res.status(200).json(holidays);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch holidays' });
  }
};

// Add a new holiday
exports.addHoliday = async (req, res) => {
  try {
    const { name, date, description } = req.body;
    await holidayModel.create(name, date, description);
    res.status(201).json({ message: 'Holiday added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add holiday' });
  }
};

// Update a holiday
exports.updateHoliday = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, description } = req.body;
    await holidayModel.update(id, name, date, description);
    res.status(200).json({ message: 'Holiday updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update holiday' });
  }
};

// Delete a holiday
exports.deleteHoliday = async (req, res) => {
  try {
    const { id } = req.params;
    await holidayModel.delete(id);
    res.status(200).json({ message: 'Holiday deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete holiday' });
  }
};
