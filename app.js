const express = require('express');
const app = express();
const holidaysRoutes = require('./routes/holidays');

app.use(express.json());
app.use('/api', holidaysRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
