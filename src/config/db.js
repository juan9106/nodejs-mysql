const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DBHost,
    user: process.env.DBUser,
    password: process.env.DBPassword,
    database: process.env.DBName
});

module.exports = db;