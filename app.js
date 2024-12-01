const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const holidaysRoutes = require("./routes/holidays");

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware for parsing JSON
app.use(bodyParser.json());

// API routes
app.use("/api/holidays", holidaysRoutes);

// Render the HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
