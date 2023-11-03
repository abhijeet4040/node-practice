const { Response_Codes, Response_Message } = require("../core/constants");
const { responseHandler } = require("../core/responseHandler");
const { createUserSchema, updateUserSchema } = require("../core/schemas/user.schemas");
const {
  createUserService,
  deleteUserService,
  updateUserService,
  getUserService,
} = require("../services/user.service");

const createUserController = async (req, res) => {
  const { error } = createUserSchema.validate(req.body);

  if (error) {
    responseHandler({
      statusCode: Response_Codes.FAILURE_FORBIDDEN_ACCESS,
      error: true,
      res,
      message: error.message,
    });
  }
  createUserService(req, res);
};

const deleteUserController = async (req, res) => {
  deleteUserService(req, res);
};

const updateUserController = async (req, res) => {
  const { error } = updateUserSchema.validate(req.body);

  if (error) {
    responseHandler({
      statusCode: Response_Codes.FAILURE_FORBIDDEN_ACCESS,
      error: true,
      res,
      message: error.message,
    });
  }
  updateUserService(req, res);
};

const getUserController = async (req, res) => {
  getUserService(req, res);
};

module.exports = {
  createUserController,
  deleteUserController,
  updateUserController,
  getUserController,
};
