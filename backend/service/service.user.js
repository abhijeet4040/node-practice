const { Response_Codes, Response_Message } = require("../core/constants");
const responseHandler = require("../core/responseHandler");
const {
  getAllUsersFromDb,
  deleteUsersFromDb,
  addUsersFromDb,
  paginateDb,
} = require("../dbLayer/dbLayer");

const getUsersDataService = async (req, res) => {
  try {
    const result = await getAllUsersFromDb();
    if (result) {
      responseHandler({
        statusCode : Response_Codes.SUCCESS_OK, error : true,
        data : result,
        res,
        message: Response_Message.FETCHED,
      })
    } else {
      responseHandler({
        statusCode : Response_Codes.SUCCESS_NO_CONTENT,
        data : result,
        res,
        message : Response_Message.FETCHED_NOT_FOUND,
      })
    }
  } catch(err) {
    responseHandler({
      statusCode : Response_Codes.FAILURE_INT_SERVER_ERROR
    })
  }
  
};

const deleteUserService = async (req, res) => {
  try {
    const result = await deleteUsersFromDb(req.body);
    if (result) {
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
  } catch (err) {
    responseHandler({
      statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
      error: true,
      res,
      message: err.message,
    });
  }
};

const addUserService = async (req, res) => {
  try {
    const result = await addUsersFromDb(req, res);

    if (result) {
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
        message: Response_Message.FETCHED_NOT_FOUND,
      });
    }
  } catch (err) {
    responseHandler({
      statusCode: Response_Codes.FAILURE_INT_SERVER_ERROR,
      error: true,
      res,
      message: err.message,
    });
  }
};

const paginateDBservice = async (req, res) => {
  const result = await paginateDb(req);
  if (result) {
    responseHandler({
      statusCode : Response_Codes.SUCCESS_OK,
      data : result,
      res,
      message : Response_Message.FETCHED,
    })
  } else {
    responseHandler({
      statusCode : Response_Codes.SUCCESS_NO_CONTENT,
      error : false,
      res,
      message : Response_Message.FETCHED_NOT_FOUND,
    })
  } 
}

module.exports = { getUsersDataService, deleteUserService, addUserService,paginateDBservice };

