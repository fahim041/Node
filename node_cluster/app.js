const express = require("express");
const app = express();

function hold(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

//first route performing a task for 5 second
app.get("/", (req, res) => {
  hold(5000);
  res.send("Hello");
});

//second route to test
app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(3000, () => console.log("Server started..."));
