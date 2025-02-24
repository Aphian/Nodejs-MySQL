var mysql = require('mysql');
var db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '1111111',
  database : 'opentutorials',
});
db.connect();

// 꺼내놓을 API 가 하나라면
module.exports = db;