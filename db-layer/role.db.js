const sequelize = require("../database/dataSource");
const role = require("../models/role");

const createRoleInDb = async (req) => {
  return await role.create(req.body);
};

const getDataRightInDb = async (data) => {
  const sql = ` SELECT role.*, user.* 
    FROM role 
    RIGHT JOIN user ON role.User_id = user.User_id;
    `;
  return await sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT,
  });
};

const getDataLeftInDb = async (data) => {
  const sql = ` SELECT role.*, user.* 
    FROM role 
    JOIN user ON role.User_id = user.User_id;
    `;
  return await sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT,
  });
};

const getAllUsersInDb = async (data) => {
  const sql = `SELECT role.*, user.* 
               FROM role
               INNER JOIN user ON role.User_id = user.User_id;`;
  return await sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT,
  });
};

module.exports = {
  createRoleInDb,
  getAllUsersInDb,
  getDataRightInDb,
  getDataLeftInDb,
};
