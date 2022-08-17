const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");
const postRouter = require("./routes/posts");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://leejeongwoo:1234@127.0.0.1/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(cors());

app.get("/", async (req, res) => {
  const posts = await Post.find().sort({
    createdAt: "desc", //최신순으로 정렬
  });
  res.render("posts/index", { posts: posts });
});

app.use("/posts", postRouter);

app.listen(5000);
