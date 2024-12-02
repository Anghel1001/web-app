const express = require('express');
const app = express();
const holidays = require('./api/holidays');

app.use(express.static('public'));
app.get('/api/holidays', holidays);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
