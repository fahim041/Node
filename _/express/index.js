const express = require("express");

const app = express();

app.set("view engine", "pug");

app.use(express.static("public"));

//custom middleware
app.use(function (req, res, next) {
  console.log("Logging...");
  next();
});

app.get("/", (req, res) => {
  res.render("index", { title: "index", message: "Hello" });
});

app.listen(3000, () => console.log("server started on port: 3000"));
