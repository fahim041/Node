const mongoose = require("mongoose");
const Joi = require("joi");

const Customer = mongoose.model(
  "customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 10,
    },
  })
);

function validateCustomer(genre) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    phone: Joi.string().min(5).max(10).required(),
    isGold: Joi.boolean(),
  };

  return Joi.validate(genre, schema);
}

module.exports = { Customer, validateCustomer };
