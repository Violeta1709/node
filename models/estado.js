//estado
//descripcion

const { DataTypes} = require('sequelize')
const { sequelize } = require('../database/db')

const Estado = sequelize.define("estado", {
   estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion:{
      type: DataTypes.STRING,
      allowNull: false
    }
   
 },
 {
    timestamps:true
 }
 );
 
 sequelize.sync().then(() => {
    console.log('estado table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 

module.exports = Estado;

