// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to get all items
router.get('/', itemController.getAllItems);

// Route to display the Add Item form
router.get('/add', (req, res) => {
  res.render('add');
});

// Route to handle adding a new item
router.post('/', itemController.addItem);

// Route to display the Edit Item form
router.get('/:id/edit', itemController.editItem);

// Route to handle updating an item
router.put('/:id', itemController.updateItem);

// Route to handle deleting an item
router.delete('/:id', itemController.deleteItem);

module.exports = router;
