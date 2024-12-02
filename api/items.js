const { Client } = require('pg'); // Example with PostgreSQL; adjust for SQLite

module.exports = async (req, res) => {
  try {
    const client = new Client();
    await client.connect();

    if (req.method === 'GET') {
      const result = await client.query('SELECT * FROM items');
      res.status(200).json(result.rows);
    }

    if (req.method === 'POST') {
      const { name, description } = req.body;
      await client.query('INSERT INTO items (name, description) VALUES ($1, $2)', [name, description]);
      res.status(201).json({ message: 'Item created' });
    }

    await client.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
