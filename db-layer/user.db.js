const { Op } = require("sequelize");
const user = require("../models/user");

const createUserInDb = async (req) => {
  return await user.create(req.body);
};

const deleteUserInDb = async (req) => {
  return await user.destroy({
    where: {
      user_id: req.params.id,
    },
  });
};

const checkUserInDb = async (req) => {
  return await user.findByPk(req.params.id);
};

const updateUserInDb = async (req, res) => {
  return await user.update(req.body, {
    where: {
      user_id: req.params.id,
    },
  });
};

const getUserInDb = async (limit, offset, order, filter, q) => {
  return await user.findAll({
    where: {
      [Op.or]: [
        { FirstName: { [Op.like]: `%${q}%` } },
        { LastName: { [Op.like]: `%${q}%` } },
        { email: { [Op.like]: `%${q}%` } },
      ],
    },
    order: [[filter, order]],
    offset: offset,
    limit: limit,
  });
};

module.exports = {
  createUserInDb,
  deleteUserInDb,
  updateUserInDb,
  getUserInDb,
  checkUserInDb,
};
