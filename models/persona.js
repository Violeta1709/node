//estado
//descripcion

const { DataTypes} = require('sequelize')
const { sequelize } = require('../database/db')
const queryInterface = sequelize.getQueryInterface();
const Persona = sequelize.define("persona", {
   Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CURP:{
      type: DataTypes.STRING,
      allowNull: false
    },
    RFC:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Telefono:{
      type: DataTypes.STRING,
      allowNull: false
    }
   
    
 },
 {
    timestamps:true
 }

 );
 
 //agrega una columna en una tabla

 //queryInterface.addColumn('personas', 'Correo_electronico', { type: DataTypes.STRING });
 

module.exports = Persona;
