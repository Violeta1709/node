require('dotenv').config();
const { Sequelize } = require("sequelize");
  

   const database = process.env.DB;
   const user = process.env.DB_USER; 
   const password = process.env.DB_PASSWORD;
   const host = process.env.HOST;
   const port = process.env.PORT;

    const sequelize = new Sequelize(
        database,
        user,
        password,{
            dialect: 'mysql',
            host: host
        }
    )

  
const dbConnectMysql = async () =>{
try{
  await  sequelize.authenticate();
  console.log('conexion exitosa',port)
}catch(e){
    console.log('error de conexion', e)
}


}




module.exports = {
 sequelize, dbConnectMysql
}