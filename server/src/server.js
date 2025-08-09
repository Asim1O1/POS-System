import app from "./app.js";
import prisma from "./config/db.js";
import { PORT } from "./constants/env.js";
import logger from "./utils/logger.js";

const startServer = async () => {
  try {
    const server = app.listen(PORT, () => {
      logger.info(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      );
    });

    // Graceful shutdown function
    const shutdown = (signal, err) => {
      logger.warn(`${signal} signal received: closing HTTP server`);

      prisma
        .$disconnect()
        .then(() => {
          logger.info("Database connection closed");
        })
        .catch((e) => {
          logger.error("Error closing DB connection", { error: e });
        });

      server.close((closeErr) => {
        if (closeErr) {
          logger.error("Error during server close", { error: closeErr });
          process.exit(1);
        } else {
          logger.info("HTTP server closed");
          if (err) {
            logger.error(`${signal} caused shutdown due to error`, {
              error: err,
            });
            process.exit(1);
          } else {
            process.exit(0);
          }
        }
      });

      // Force shutdown if server doesn't close in time
      setTimeout(() => {
        logger.error("Forcing server shutdown");
        process.exit(1);
      }, 5000);
    };

    // Listen to termination signals
    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (err) => {
      logger.error("Unhandled Rejection: " + err.message, { stack: err.stack });
      shutdown("UNHANDLED_REJECTION", err);
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (err) => {
      logger.error("Uncaught Exception: " + err.message, { stack: err.stack });
      shutdown("UNCAUGHT_EXCEPTION", err);
    });
  } catch (error) {
    logger.error("Fatal error during server startup", {
      error: error.message,
      stack: error.stack,
    });
    process.exit(1);
  }
};

startServer();
