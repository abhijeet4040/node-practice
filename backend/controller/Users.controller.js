const {
  getUsersDataService,
  deleteUserService,
  addUserService,
  paginateDBservice,
} = require("../service/service.user");

const getAllUsersController = async (req, res) => {
  getUsersDataService(req, res);
};

const deleteUsersController = async (req, res) => {
  deleteUserService(req, res);
};

const addUserController = async (req, res) => {
  await addUserService(req, res);
};

const paginationController = async (req, res) => {
  await paginateDBservice(req, res);
};

module.exports = {
  getAllUsersController,
  deleteUsersController,
  addUserController,
  paginationController,
};
