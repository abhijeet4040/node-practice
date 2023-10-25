const {DataTypes} = require('sequelize')
const sequelize = require('../database/dataSource')


const Users = sequelize.define(
  'Users' ,
  {
    user_id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
    },
    username: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    password : {
      type : DataTypes.STRING,
      allowNull : false,
    },
    age : {
      type : DataTypes.INTEGER,
      defaultValue : 21,
    }
  },
  {
    freezeTableName : true,
    timestamps : false,

  }
);
module.exports = Users;