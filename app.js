const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Fetch bank holiday data
const fetchBankHolidays = async () => {
  try {
    const response = await axios.get('https://publicholidaysapi.com/holidays?country=GB&year=2024');
    return response.data;
  } catch (error) {
    console.error("Error fetching bank holidays:", error);
    return [];
  }
};

// Route to display items and bank holidays
app.get('/', async (req, res) => {
  const holidays = await fetchBankHolidays();
  res.render('index', { holidays });
});

// Add additional routes for items CRUD...
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
