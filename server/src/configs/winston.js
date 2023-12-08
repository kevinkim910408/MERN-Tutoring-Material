const winston = require("winston");
const winstonDaily = require("winston-daily-rotate-file");

const logDir = "logs"; // where you wanna save this log files? the folder name
const { combine, timestamp, printf } = winston.format;

// Define log format
const logFormat = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

/*
 * Log Level => what types of log you want to save
 * error: 0, warn: 1, info: 2, debug: 3
 *
 * error: when you get error
 * info: login, logout, registeration etc info
 * warn: when you get wraning (we dont use now)
 * debug: something need to check on production side (we dont use now)
 */

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat
  ),
  transports: [
    // info file format
    new winstonDaily({
      level: "info",
      datePattern: "YYYY-MM-DD",
      dirname: logDir,
      filename: `%DATE%.log`,
      maxFiles: 30, // Maximum 30 days log files will be saved
      zippedArchive: true,
    }),
    // error file format
    new winstonDaily({
      level: "error",
      datePattern: "YYYY-MM-DD",
      dirname: logDir + "/error", // err files save on error foloder
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

// for dev feature
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple() // `${info.level}: ${info.message} JSON.stringify({ ...rest })` format
      ),
    })
  );
}

module.exports = { logger };
