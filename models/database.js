const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0000",
    database: "lieu",
  });
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  module.exports = connection;