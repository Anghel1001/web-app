const { open } = require('sqlite');

const getAllItems = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const items = await db.all('SELECT * FROM items');
    res.json(items);
  } catch (err) {
    res.status(500).send('Error retrieving items');
  }
};

const createItem = async (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).send('Name is required');
  }
  const db = req.app.locals.db;
  try {
    await db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description || null]);
    res.status(201).send('Item added');
  } catch (err) {
    res.status(500).send('Error adding item');
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const db = req.app.locals.db;
  try {
    const result = await db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description || null, id]);
    if (result.changes === 0) {
      return res.status(404).send('Item not found');
    }
    res.send('Item updated');
  } catch (err) {
    res.status(500).send('Error updating item');
  }
};

const partiallyUpdateItem = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const db = req.app.locals.db;
  
  try {
    const item = await db.get('SELECT * FROM items WHERE id = ?', [id]);
    if (!item) {
      return res.status(404).send('Item not found');
    }

    const updatedName = updates.name || item.name;
    const updatedDescription = updates.description || item.description;

    await db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [updatedName, updatedDescription, id]);
    res.send('Item partially updated');
  } catch (err) {
    res.status(500).send('Error partially updating item');
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  const db = req.app.locals.db;
  try {
    const result = await db.run('DELETE FROM items WHERE id = ?', [id]);
    if (result.changes === 0) {
      return res.status(404).send('Item not found');
    }
    res.send('Item deleted');
  } catch (err) {
    res.status(500).send('Error deleting item');
  }
};

module.exports = { getAllItems, createItem, updateItem, partiallyUpdateItem, deleteItem };
