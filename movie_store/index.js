const express = require("express");
const mongoose = require("mongoose");

const customers = require("./routes/customers");
const genres = require("./routes/genres");
const movies = require("./routes/movies");

const app = express();

mongoose
  .connect("mongodb://localhost/movie-store")
  .then(() => console.log("database connected"))
  .catch((err) => console.error("could not connect to database"));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
