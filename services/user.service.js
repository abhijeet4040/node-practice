const { to } = require("await-to-js");
const bcrypt = require("bcrypt");
const { KeyConfig } = require("../configuration/db.config");
const { responseHandler } = require("../core/responseHandler");
const jwt = require("jsonwebtoken");
const {
  createUserInDb,
  deleteUserInDb,
  updateUserInDb,
  getUserInDb,
  checkUserInDb,
} = require("../db-layer/user.db");
const { Response_Codes, Response_Message } = require("../core/constants");

const createUserService = async (req, res) => {
  bcrypt.hash(req.body.password, 10, async (err, data) => {
    if (err) {
      responseHandler({
        statusCode: Response_Codes.FAILURE_SERVICE_UNAVAILABLE,
        res,
        message: err,
        error: true,
      });
    } else {
      req.body.password = data;

      const [error, result] = await to(createUserInDb(req));
      if (!error) {
        const authToken = generateTokenService(result);
        responseHandler({
          statusCode: Response_Codes.SUCCESS_CREATED,
          message: Response_Message.INSERT_SUCCESS,
          data: {result,authToken},
          res,
        });
      } else {
        responseHandler({
          statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
          res,
          error: true,
          message: error,
        });
      }
    }
  });
};

const deleteUserService = async (req, res) => {
  const userInDb = await checkUserInDb(req);
  if (userInDb) {
    const [error, _result] = await to(deleteUserInDb(req));
    if (!error) {
      responseHandler({
        statusCode: Response_Codes.SUCCESS_OK,
        message: Response_Message.DELETE_SUCCESS,

        res,
      });
    } else {
      responseHandler({
        statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
        res,
        error: true,
        message: error,
      });
    }
  } else {
    responseHandler({
      statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
      res,
      error: true,
      message: Response_Message.USER_NOT_EXIST,
    });
  }
};

const updateUserService = async (req, res) => {
  const userInDb = await checkUserInDb(req);
  if (userInDb) {
    const [error, result] = await to(updateUserInDb(req));
    if (!error) {
      responseHandler({
        statusCode: Response_Codes.SUCCESS_OK,
        message: Response_Message.UPDATE_SUCCESS,
        res,
        data: result,
      });
    } else {
      responseHandler({
        statusCode: Response_Codes.SUCCESS_OK,
        message: error,
        res,
        error: true,
      });
    }
  } else {
    responseHandler({
      statusCode: Response_Codes.FAILURE_BAD_REQUEST,
      message: Response_Message.USER_NOT_EXIST,
      res,
      error: true,
    });
  }
};

const getUserService = async (req, res) => {
  const {
    limit = 2,
    page = 1,
    order = "ASC",
    filter = "createdAt",
    q = "",
  } = req.query;
  const offset = (page - 1) * limit;
  const [error, result] = await to(
    getUserInDb(parseInt(limit), parseInt(offset), order, filter, q)
  );
  if (!error) {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_OK,
      message: Response_Message.FETCHED,
      res,
      data: result,
    });
  } else {
    responseHandler({
      statusCode: Response_Codes.FAILURE_NOT_FOUND,
      message: error,
      res,
      error: true,
    });
  }
};

const generateTokenService = (data) => {
  return (authKey = jwt.sign({ data }, KeyConfig.secretKey, {
    expiresIn: "1d",
  }));
};

module.exports = {
  createUserService,
  deleteUserService,
  updateUserService,
  getUserService,
};
