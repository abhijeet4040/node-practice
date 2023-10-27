const { Response_Codes, Response_Message } = require("../core/constants");
const responseHandler = require("../core/responseHandler");
const {
  deleteUserService,
  addUserService,
  updateUserService,
  getUserService,
} = require("../service/service.user");
const {
  addUsersSchema, updateUsersSchema,
} = require("../utils/users.validation_schema");


const deleteUsersController = async (req, res) => {
  deleteUserService(req, res);
};

const addUserController = async (req, res) => {
  const data = req.body;
  const { error } = addUsersSchema.validate(data);
  if (error) {
    responseHandler({
      error: true,
      statusCode: Response_Codes.FAILURE_BAD_REQUEST,
      res,
      message: "error from controller",
    });
  }
  await addUserService(req, res);
};

const updateUsersController = async (req, res) => {
  const data = req.query;
  const { error } = updateUsersSchema.validate(data);
  if (error) {
    responseHandler({
      error: true,
      statusCode: Response_Codes.FAILURE_BAD_REQUEST,
      res,
      message: "error from controller",
    });
  }
  await updateUserService(req, res);
};

const getUserController = async (req, res) => {
  await getUserService(req, res); 
};

module.exports = {
  deleteUsersController,
  addUserController,
  updateUsersController,
  getUserController,
};
