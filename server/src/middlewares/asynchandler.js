import logger from "../utils/logger.js";

const asyncHandler = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    logger.error("Async handler error", { error: err });
    next(err);
  }
};

export default asyncHandler;
