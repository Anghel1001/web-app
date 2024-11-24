// app.js
const express = require('express');
const path = require('path');
const holidaysRoutes = require('./routes/holidays');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/holidays', holidaysRoutes);
