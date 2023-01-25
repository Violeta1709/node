const { DataTypes} = require('sequelize')
const { sequelize } = require('../database/db')

const Roles = sequelize.define("rols", {
   rol: {
      type: DataTypes.STRING,
      allowNull: false
    }
   
 },
 {
    timestamps:true
 }
 );
 


module.exports = Roles;
