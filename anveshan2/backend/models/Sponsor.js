const db = require('./database');

class Sponsor {
  static create(sponsor, callback) {
    const { name, email, company } = sponsor;
    db.run(
      `INSERT INTO Sponsor (name, email, company)
       VALUES (?, ?, ?)`,
      [name, email, company],
      function (err) {
        callback(err, this.lastID);
      }
    );
  }

  static getAll(callback) {
    db.all(`SELECT * FROM Sponsor`, [], (err, rows) => {
      callback(err, rows);
    });
  }

  // Other Sponsor methods...
}

module.exports = Sponsor;