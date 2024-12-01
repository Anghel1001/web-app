const Holiday = require('../models/holidayModel');

// Get All Holidays
exports.getHolidays = async (req, res) => {
  try {
    const holidays = await Holiday.getAll();
    res.status(200).json(holidays);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a Holiday
exports.addHoliday = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newHoliday = await Holiday.create(name, description);
    res.status(201).json(newHoliday);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Holiday
exports.updateHoliday = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedHoliday = await Holiday.update(id, name, description);
    res.status(200).json(updatedHoliday);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Holiday
exports.deleteHoliday = async (req, res) => {
  const { id } = req.params;
  try {
    await Holiday.delete(id);
    res.status(200).json({ message: 'Holiday deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
