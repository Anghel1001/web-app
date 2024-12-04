// controllers/itemController.js
const db = require('../db'); // assuming db.js contains SQLite setup

// Get all items
exports.getAllItems = (req, res) => {
    db.all('SELECT * FROM items', [], (err, rows) => {
        if (err) throw err;
        res.render('index', { items: rows });
    });
};

// Add new item
exports.addItem = (req, res) => {
    const { name, description } = req.body;
    db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

// Edit item form
exports.editItem = (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM items WHERE id = ?', [id], (err, row) => {
        if (err) throw err;
        res.render('edit', { item: row });
    });
};

// Update item
exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

// Delete item
exports.deleteItem = (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM items WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};
