const jwt = require("jsonwebtoken");
const { KeyConfig } = require("../configuration/db.config");
const { responseHandler } = require("../core/responseHandler");
const { Response_Codes, Response_Message } = require("../core/constants");

const authUserMiddleware = (req, res, next) => {
 
  if (req.headers.authorization) {
    try {
      
      const authToken = req.headers.authorization.split(" ")[1];
  
      const decoded = jwt.verify(authToken, KeyConfig.secretKey);
      next();
    } catch (err) {
      responseHandler({
        statusCode : Response_Codes.FAILURE_FORBIDDEN_ACCESS,
        message : err.message,
        res, 
        error : true
      });
    }
  } else {
    responseHandler({
      statusCode : Response_Codes.FAILURE_FORBIDDEN_ACCESS,
      message : Response_Message.FAILURE_FORBIDDEN_ACCESS,
      res,
      error : true,
    })
  }
};

module.exports = {
    authUserMiddleware
}