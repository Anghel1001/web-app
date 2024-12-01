const express = require('express');
const holidaysRouter = require('./routes/holidays');

const app = express();
app.use(express.json());
app.use('/holidays', holidaysRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
