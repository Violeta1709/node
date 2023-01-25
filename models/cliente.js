

const { DataTypes} = require('sequelize')
const { sequelize } = require('../database/db')

const Cliente = sequelize.define("cliente", {
    Compañia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RFC:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Telefono: {
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
 

module.exports = Cliente;
