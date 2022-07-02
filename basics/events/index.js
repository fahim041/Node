const Logger = require("./logger");
const logger = new Logger();

logger.on("message", () => console.log("Message received"));
logger.log("message");
