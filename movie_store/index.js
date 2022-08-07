const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const customers = require("./routes/customers");
const genres = require("./routes/genres");
const movies = require("./routes/movies");
const rentals = require("./routes/rental");
const user = require("./routes/user");
const auth = require("./routes/auth");

const app = express();

if (!config.get("jwtPrivateKey")) {
  console.error("jwt private key not defined");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/movie-store")
  .then(() => console.log("database connected"))
  .catch((err) => console.error("could not connect to database"));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);
app.use("/api/rentals", rentals);
app.use("/api/user", user);
app.use("/api/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
