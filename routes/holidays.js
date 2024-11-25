// routes/holidays.js
const express = require('express');
const router = express.Router();
const holidaysController = require('../controllers/holidaysController');

router.get('/', holidaysController.getAllHolidays);

router.post('/', holidaysController.addHoliday);

router.put('/:id', holidaysController.updateHoliday);

router.patch('/:id', holidaysController.updateHoliday);

router.delete('/:id', holidaysController.deleteHoliday);

module.exports = router;
