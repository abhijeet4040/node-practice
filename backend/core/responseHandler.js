const responseHandler = ({
  statusCode,
  message = "",
  error = false,
  data = [],
  res,
}) => {
  res.json({
    error: error,
    statusCode : statusCode,
    message : message,
    data : data,
  });
};

module.exports = responseHandler;

