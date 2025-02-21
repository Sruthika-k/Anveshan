const db = require('./database');

class User {
  static create(user, callback) {
    const { name, email, password, linkedinProfile, githubProfile, skills, pastProjects } = user;
    db.run(
      `INSERT INTO User (name, email, password, linkedinProfile, githubProfile, skills, pastProjects)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, password, linkedinProfile, githubProfile, skills, pastProjects],
      function (err) {
        callback(err, this.lastID);
      }
    );
  }

  static getAll(callback) {
    db.all(`SELECT * FROM User`, [], (err, rows) => {
      callback(err, rows);
    });
  }

  // Other User methods...
}

module.exports = User;