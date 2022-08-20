const mongoose = require("mongoose");

const { Schema } = mongoose;
const postSchema = new Schema({
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Post", postSchema);
