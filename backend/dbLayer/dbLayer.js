const Users = require("../models/Users.model");

const getAllUsersFromDb = async () => {
  const users = await Users.findAll();
  return users;
};

const deleteUsersFromDb = async (req) => {
  const users = await Users.destroy({
    where: { user_id: req.params.id },
  });
};

const addUsersFromDb = async (req) => {
  const users = await Users.create(req.body);
  return users;
};

const paginateDb = async (req) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const users = await Users.findAll()
    const updatedUsers =users.splice(startIndex, endIndex);
    return updatedUsers;
}

module.exports = { getAllUsersFromDb, deleteUsersFromDb, addUsersFromDb, paginateDb };
