const { DataTypes } = require("sequelize");
const  sequelize  = require("../database/dataSource");

const user = sequelize.define("user", {
  User_id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true,
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email : {
    type : DataTypes.STRING,
    allowNull : false,
    unique: 'email',
  },
  password : {
    type : DataTypes.STRING,
    allowNull : false,
  },
  age : {
    type : DataTypes.INTEGER,
    allowNull : false,
  },
  gender : {
    type : DataTypes.ENUM('male', 'female', 'others'),
    allowNull : true,
  }
},
{
    timestamps : true,
    freezeTableName: true,
    });

module.exports = user
