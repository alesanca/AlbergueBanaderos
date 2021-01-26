var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lostAnimals"
  });

  con.connect(function(err) {
    if (err) throw err;
      console.log("Connected!");
  });

  con.query("SELECT especie , nombre FROM animales", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  
  con.query("SELECT * FROM animales", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });


