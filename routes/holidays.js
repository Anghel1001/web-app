const express = require('express');
const router = express.Router();
const holidaysController = require('../controllers/holidaysController');

router.get('/', holidaysController.getAllHolidays);
router.get('/:id', holidaysController.getHolidayById);
router.post('/', holidaysController.createHoliday);
router.put('/:id', holidaysController.updateHoliday);
router.delete('/:id', holidaysController.deleteHoliday);

module.exports = router;
