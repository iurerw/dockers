const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "172.17.0.2",
  user: "root",
  password: "iurerw08",
  database: "ninjasgames", 
  connectTimeout: 30000
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL server.");
});

module.exports = connection;
