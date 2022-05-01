const Event = require("events");
const emitter = new Event();

emitter.on("messageLogged", (args) => {
  console.log("listener called", args);
});

emitter.emit("messageLogged", "user");
