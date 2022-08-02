const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to mongodb database"))
  .catch((err) => console.log(err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Next",
    author: "user1",
    tags: ["java", "backend"],
    isPublished: false,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  let courses = await Course.find().count();
  console.log(courses);
}

async function updateCourse() {}

createCourse();
