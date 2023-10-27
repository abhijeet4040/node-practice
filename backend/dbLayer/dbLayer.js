const Users = require("../models/Users.model");

const deleteUsersFromDb = async (req) => {
  return Users.destroy({
    where: { id: req.params.id },
  });
};

const addUsersFromDb = async (req) => {
  return Users.create(req.body);
};

const updateDb = async (req) => {
  return Users.update(placeholder, {
    where: { id: userId },
  });
};



const getUsersDb = async (sort, order, filter) => {
  return await Users.findAll({
    where: filter,
    order: [[sort, order]],
  });
};

module.exports = {
  deleteUsersFromDb,
  addUsersFromDb,
  updateDb,
  getUsersDb,
};
