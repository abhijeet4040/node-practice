const { default: to } = require("await-to-js");
const { createRoleInDb, getAllUsersInDb, getDataLeftInDb, getDataRightInDb } = require("../db-layer/role.db");
const { responseHandler } = require("../core/responseHandler");
const { Response_Codes, Response_Message } = require("../core/constants");

const createRoleService = async (req, res) => {
    const role = req.body.role_name;
    const [error, result] = await to(createRoleInDb(role));
    if (!error) {
      responseHandler({
        statusCode: Response_Codes.SUCCESS_CREATED,
        message: Response_Message.INSERT_SUCCESS,
        data: result,
        res,
      });
    } else {
      responseHandler({
        statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
        res,
        error: error,
        message: error.message,
      });
    }
};

const getAllDataService  = async (req, res) => {
  const role = req.body.role_name;
  const [error, result] = await to(getAllUsersInDb(role));
  if (!error) {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_CREATED,
      message: Response_Message.INSERT_SUCCESS,
      data: result,
      res,
    });
  } else {
    responseHandler({
      statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
      res,
      error: error,
      message: error.message,
    });
  }
};

const getAllDataLeftService  = async (req, res) => {
  const role = req.body.role_name;
  const [error, result] = await to(getDataLeftInDb(role));
  if (!error) {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_CREATED,
      message: Response_Message.INSERT_SUCCESS,
      data: result,
      res,
    });
  } else {
    responseHandler({
      statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
      res,
      error: error,
      message: error.message,
    });
  }
};

const getAllDataRightService = async (req, res) => {
  const role = req.body.role_name;
  const [error, result] = await to(getDataRightInDb(role));
  if (!error) {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_CREATED,
      message: Response_Message.INSERT_SUCCESS,
      data: result,
      res,
    });
  } else {
    responseHandler({
      statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
      res,
      error: error,
      message: error.message,
    });
  }
};


module.exports = {
    createRoleService,
    getAllDataLeftService,
    getAllDataRightService,
    getAllDataService,
}