

const { DataTypes} = require('sequelize')
const { sequelize } = require('../database/db')

const Area = sequelize.define("area", {
   Nombre_de_area: {
      type: DataTypes.STRING,
      allowNull: false
    }
 },
 {
    timestamps:true
 }
 );
 
 sequelize.sync().then(() => {
    console.log('area table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 

module.exports = Area;
