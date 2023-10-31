const Sequelize = require("sequelize");
const {
  DATABASE,
  NAME,
  PASSWORD,
  DIALECT,
  HOST,
} = require("../configuration/db.config");

const sequelize = new Sequelize(DATABASE, NAME, PASSWORD, {
    HOST,
    DIALECT
});


