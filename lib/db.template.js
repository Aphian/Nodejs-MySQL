var mysql = require('mysql');
var db = mysql.createConnection({
  host : '',
  user : '',
  password : '',
  database : '',
});
db.connect();

// 꺼내놓을 API 가 하나라면
module.exports = db;