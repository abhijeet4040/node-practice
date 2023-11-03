const { DataTypes } = require("sequelize");
const sequelize = require("../database/dataSource");

const role = sequelize.define(
  "role",
  {
    User_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "user_id",
    },
    Role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = role;
