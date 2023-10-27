const { Response_Codes, Response_Message } = require("../core/constants");
const to = require("await-to-js").default;

const responseHandler = require("../core/responseHandler");
const {
  deleteUsersFromDb,
  addUsersFromDb,
  updateDb,
  getUsersDb,
} = require("../dbLayer/dbLayer");

const deleteUserService = async (req, res) => {
  const [error, result] = await to(deleteUsersFromDb(req));
  if (!error) {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_OK,
      data: req.body,
      res,
      message: Response_Message.DELETE_SUCCESS,
    });
  } else {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_OK,
      res,
      message: Response_Message.FETCHED_NOT_FOUND,
    });
  }
};

const addUserService = async (req, res) => {
  const [error, result] = await to(addUsersFromDb(req));

  if (!error) {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_OK,
      data: result,
      res,
      message: Response_Message.UPDATE_SUCCESS,
    });
  } else {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_NO_CONTENT,
      res,
      error: true,
      message: Response_Message.FETCHED_NOT_FOUND,
    });
  }
};

const updateUserService = async (req, res) => {
  const userId = req.params.id;
  const placeholder = req.query;
  const [error, result] = await to(updateDb(userId, placeholder));
  if (!error) {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_CREATED,
      data: result,
      res,
      message: Response_Message.UPDATE_SUCCESS,
    });
  } else {
    responseHandler({
      statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
      res,
      error: true,
      message: Response_Message.INSERT_AL_EXIST,
    });
  }
};

const getUserService = async (req, res) => {
  const {sort = "createdAt", order= "ASC",page = 1, limit = 3, ...filter} = req.query || {};
  const [error, result] = await to(getUsersDb(sort,order,filter));
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  if (!error) {
    const data = result.slice(startIndex, endIndex);

    responseHandler({
      statusCode: Response_Codes.SUCCESS_OK,
      res,
      data: data,
      message: Response_Message.FETCHED,
    });
  } else {
    responseHandler({
      statusCode: Response_Codes.FAILURE_NOT_FOUND,
      res,
      error : true,
      message: Response_Message.FETCHED_NOT_FOUND,
    });
  }
};

module.exports = {
  deleteUserService,
  addUserService,
  updateUserService,
  getUserService,
};
