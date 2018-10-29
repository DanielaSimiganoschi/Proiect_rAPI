var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "daniela",
  password: "password",
  database: "mydb"
});

connection.connect()

connection.query('SELECT * from mydb', function(err,rows,fields){
if(err) throw err

	console.log('The solution is', rows[0].solution)



})


connection.end()