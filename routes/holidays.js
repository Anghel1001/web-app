const express = require("express");
const router = express.Router();
const holidaysController = require("../controllers/holidaysController");

router.get("/", holidaysController.getHolidays);
router.post("/", holidaysController.addHoliday);

module.exports = router;
