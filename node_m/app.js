const express = require("express");
const mongoose = require("mongoose");
//const app = express();

mongoose
  .connect("mongodb://localhost:27017/node_m")
  .then(() => console.log("connected"));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);
const createCourse = async () => {
  const course = new Course({
    name: "Course-2",
    author: "None",
    tags: ["test-1", "test-2"],
    isPublished: true,
  });
};

const getCourses = async () => {
  const list = await Course.find({ name: "Course-2" }).select({
    name: 1,
    tags: 1,
  });
  console.log(list);
};

const exercise = async () => {
  const list = await Course.find({
    isPublished: true,
  })
    .or([{ tags: "frontend" }, { tags: "backend" }])
    .sort("-price")
    .select("name author price");
  console.log(list);
};

const updateCourse = async () =>{
    
}

updateCourse();

/*app.get("/", (req, res) => res.send("Hello world"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); */
