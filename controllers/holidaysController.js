const Holiday = require("../models/holidayModel");

exports.getHolidays = async (req, res) => {
    try {
        const holidays = await Holiday.getAll();
        res.status(200).json(holidays);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addHoliday = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newHoliday = await Holiday.create(name, description);
        res.status(201).json(newHoliday);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
