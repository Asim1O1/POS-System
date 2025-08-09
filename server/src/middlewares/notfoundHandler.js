import HTTP_STATUS from "../constants/http.js";
import logger from "../utils/logger.js";

const notFoundHandler = (req, res, next) => {
  logger.warn("Resource not found", {
    path: req.originalUrl,
    method: req.method,
    ip: req.ip,
  });

  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    error: "Resource not found",
    message: `Cannot find ${req.originalUrl} on this server`,
  });
};

export default notFoundHandler;
