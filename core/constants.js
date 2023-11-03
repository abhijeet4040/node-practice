const Response_Codes = {
    SUCCESS_OK: 200,
    SUCCESS_CREATED: 201,
    SUCCESS_NO_CONTENT: 202,
    FAILURE_BAD_REQUEST: 400,
    FAILURE_FORBIDDEN_ACCESS: 403,
    FAILURE_NOT_FOUND: 404,
    FAILURE_INT_SERVER_ERROR: 500,
    FAILURE_SERVICE_UNAVAILABLE: 503,
};

const Response_Message = {
    FETCHED: "Successfully data fetched",
  FETCHED_NOT_FOUND: "Data doesn't exist already",
  INSERT_SUCCESS: "Data inserted successfully",
  INSERT_AL_EXIST: "Data already exists",
  UPDATE_SUCCESS: "Data updated successfully",
  DELETE_SUCCESS: "Data deleted successfully",
  VALIDATION_ERROR: "Invalid types",
  USER_NOT_EXIST: "User not found",
  FAILURE_FORBIDDEN_ACCESS : "Access denied",
};

module.exports = {Response_Message, Response_Codes};