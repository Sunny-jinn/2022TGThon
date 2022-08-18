/*테이블=컬렉션
  로우=다큐먼트
  컬럼=필드    */

const mongoose = require("mongoose");

const { Schema } = mongoose;
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  markdown: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
