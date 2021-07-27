const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'employee_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
});

connection.query = util.promisify(connection.query);

module.exports = connection
