
const { DataTypes} = require('sequelize')
const { sequelize } = require('../database/db');
const Roles = require('./roles');


const Usuario = sequelize.define("usuario", {
    Usuario : {
      type: DataTypes.STRING,
      allowNull: false
    },
    Contraseña: {
        type: DataTypes.STRING
    }
 },
 {
    timestamps:true
 }
 );



 
//  sequelize.sync().then(() => {
//     console.log('usuario table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });
 

module.exports = Usuario;
