const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    linkedinProfile TEXT,
    githubProfile TEXT,
    skills TEXT,
    xpPoints INTEGER DEFAULT 0,
    pastProjects TEXT
  )`);

  db.run(`CREATE TABLE Event (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    date TEXT,
    location TEXT
  )`);

  db.run(`CREATE TABLE Sponsor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    company TEXT
  )`);
});

module.exports = db;