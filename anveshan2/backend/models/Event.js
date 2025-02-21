const db = require('./database');

class Event {
  static create(event, callback) {
    const { name, description, date, location } = event;
    db.run(
      `INSERT INTO Event (name, description, date, location)
       VALUES (?, ?, ?, ?)`,
      [name, description, date, location],
      function (err) {
        callback(err, this.lastID);
      }
    );
  }

  static getAll(callback) {
    db.all(`SELECT * FROM Event`, [], (err, rows) => {
      callback(err, rows);
    });
  }

  // Other Event methods...
}

module.exports = Event;