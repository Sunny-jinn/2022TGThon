const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");
const User = require("./models/user");
const postRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/blog", {
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
app.use("/user", userRouter);

app.listen(5000);
