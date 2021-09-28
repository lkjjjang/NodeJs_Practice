var mysql = require('mysql');
var db = mysql.createConnection({
    host : 'lkjjjang85.cafe24.com',
    user : 'lkjjjang85',
    password : 'rlatjdal88',
    database : 'lkjjjang85',
  });
  
  db.connect();
  module.exports = db;