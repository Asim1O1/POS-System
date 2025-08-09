import logger from "../utils/logger.js";

const handleAppError = (res, error) => {
  logger.error("Handled AppError", {
    message: error.message,
    code: error.errorCode,
    statusCode: error.statusCode,
    details: error.details || null,
  });

  return res.status(error.statusCode).json({
    success: false,
    message: error.message,
    code: error.errorCode,
    ...(error.details && { details: error.details }),
  });
};

const errorHandler = (err, req, res, next) => {
  if (err.name === "AppError") {
    return handleAppError(res, err);
  }

  // Log the error details for unexpected errors
  logger.error(err.message, {
    stack: err.stack,
    path: req.originalUrl,
    method: req.method,
    ip: req.ip,
  });

  const statusCode = err.statusCode || 500;
  const message =
    statusCode === 500
      ? "Internal Server Error"
      : err.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

export default errorHandler;
