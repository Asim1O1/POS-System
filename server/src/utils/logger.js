import winston from "winston";

const { combine, timestamp, printf, colorize } = winston.format;

// Define log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create logger instance
const logger = winston.createLogger({
  level: "info", // minimum log level to capture
  format: combine(
    colorize(), // colorizes logs in console
    timestamp(), // adds timestamp
    logFormat // custom format
  ),
  transports: [
    new winston.transports.Console(), // logs to console
  ],
});

export default logger;
