const mysql = require("mysql");
  
let Connection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'calculadora',
});
  
Connection.connect ((err) => {
    if (err) {
      console.log("La base de datos no se logro conectar !!!");
    } else {
      console.log("la base de datos se ha conectado existosamente");
    }
});
 const prueba = Connection.query('SELECT * FROM usuarios'
, function  (error, results, fields) {
    if (error)throw error;
        console.log(results);

    });




Connection.end();


module.exports = {
    Connection, prueba
}