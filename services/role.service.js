const { default: to } = require("await-to-js");
const { createRoleInDb, getAllUsersInDb, getDataLeftInDb, getDataRightInDb } = require("../db-layer/role.db");
const { responseHandler } = require("../core/responseHandler");
const { Response_Codes, Response_Message } = require("../core/constants");

const createRoleService = async (req, res) => {
    const [error, result] = await to(createRoleInDb(req));
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

const getAllDataService  = async (_req, res) => {
  console.log('insider service')

  const [error, result] = await to(getAllUsersInDb());
  console.log(error,'------______________------',result)

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

const getAllDataLeftService  = async (_req, res) => {
  const [error, result] = await to(getDataLeftInDb());
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

const getAllDataRightService = async (_req, res) => {
  const [error, result] = await to(getDataRightInDb());
  console.log(error,'-------__________---------',result);
  if (!error) {
    responseHandler({
      statusCode: Response_Codes.SUCCESS_OK,
      message: Response_Message.FETCHED,
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