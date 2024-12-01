const express = require('express');
const router = express.Router();
const holidaysController = require('../controllers/holidaysController');

// CRUD Endpoints
router.get('/', holidaysController.getHolidays);
router.post('/', holidaysController.addHoliday);
router.put('/:id', holidaysController.updateHoliday);
router.delete('/:id', holidaysController.deleteHoliday);

module.exports = router;
