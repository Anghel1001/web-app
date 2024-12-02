const express = require('express');
const router = express.Router();
const { getAllItems, createItem, updateItem, partiallyUpdateItem, deleteItem } = require('../controllers/itemsController');

router.get('/', getAllItems);
router.post('/', createItem);
router.put('/:id', updateItem);
router.patch('/:id', partiallyUpdateItem);
router.delete('/:id', deleteItem);

module.exports = router;
