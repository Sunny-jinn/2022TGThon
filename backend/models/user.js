const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  template: {
    type: String,
  },
});

module.exports = mongoose.model("User", postSchema);
