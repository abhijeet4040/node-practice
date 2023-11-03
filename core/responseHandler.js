const responseHandler = ({
  statusCode,
  message,
  error = false,
  data = [],
  res,
}) => {
  res.status(statusCode).json({message,error,data});
};


module.exports = {responseHandler};