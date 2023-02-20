const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb://localhost:27017/project_management",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log(`Mongodb connected!`);
};

module.exports = connectDB;
