const express = require('express');
const router = express.Router();
const holidaysController = require('../controllers/holidaysController');

router.get('/holidays', holidaysController.getAllHolidays);
router.get('/holidays/:id', holidaysController.getHolidayById);
router.post('/holidays', holidaysController.addHoliday);
router.put('/holidays/:id', holidaysController.updateHoliday);
router.delete('/holidays/:id', holidaysController.deleteHoliday);

module.exports = router;
