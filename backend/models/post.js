const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");
const createDomPurify = require("dompurify"); //for markdown
const { JSDOM } = require("jsdom"); //for markdown
const dompurify = createDomPurify(new JSDOM().window); //for markdown
const postSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
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
  thumbnail: {
    type: String,
  },
});

module.exports = mongoose.model("Post", postSchema);
