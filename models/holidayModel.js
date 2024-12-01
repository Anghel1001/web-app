const db = require("./database");

class Holiday {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM holidays", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static create(name, description) {
        return new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO holidays (name, description) VALUES (?, ?)",
                [name, description],
                function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ id: this.lastID, name, description });
                    }
                }
            );
        });
    }
}

module.exports = Holiday;
