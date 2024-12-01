const db = require("./database");

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS holidays (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL
        )`
    );
    console.log("Table 'holidays' ensured.");
});

db.close();
