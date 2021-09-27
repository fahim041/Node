const url = "test";

function logger(msg) {
  console.log("test-module", msg);
}

module.exports = { logger, url };
