 

const mysql = require("mysql");
  
let Connection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'calculadora',
});
  
Connection.connect((err) => {
    if (err) {
      console.log("La base de datos no se logro conectar !!!", err);
    } else {
      console.log("la base de datos se ha conectado existosamente");
    }
});
 
Connection.query('SELECT * FROM usuarios', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

  



Connection.end();


module.exports = {
    Connection
}