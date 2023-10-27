const { DataTypes } = require("sequelize");
const sequelize = require("../database/dataSource");

const Users = sequelize.define(
  "Users",
  {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    email : {
      type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
    
  }
)
module.exports = Users;
