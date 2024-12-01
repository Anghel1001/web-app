const express = require('express');
const { getHolidays, createHoliday } = require('../controllers/holidaysController');

const router = express.Router();
router.get('/', getHolidays);
router.post('/', createHoliday);

module.exports = router;
