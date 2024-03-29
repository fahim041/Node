const { Router } = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const { User, validateUser } = require("../models/user");
const auth = require("../middleware/auth");

const router = Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exist");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  //const token = jwt.sign({ _id: user.id }, config.get("jwtPrivateKey"));
  const token = user.generateAuthToken();
  res.status(201).header("x-auth-token", token).send({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
});

module.exports = router;
