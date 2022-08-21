const express = require("express");
const Post = require("./../models/post");
const router = express.Router();
const User = require("./../models/user");

router.get("/new", (req, res) => {
  res.render("posts/new", { post: new Post() });
});

router.get("/:id", async (req, res) => {
  const posts = await Post.find().sort({
    createdAt: "desc", //최신순으로 정렬
  });
  const userInfo = await User.find({ id: req.params.id });
  res.send({
    posts: posts,
    userColor: userInfo[0].color,
    userTp: userInfo[0].template,
  });
});

router.get("/mypage/:author", async (req, res) => {
  console.log(req.params.author);
  const posts = await Post.find({ author: req.params.author }).sort({
    createdAt: "desc",
  });
  const userInfo = await User.find({ id: req.params.author });
  console.log(posts);
  res.send({
    posts: posts,
    userColor: userInfo[0].color,
    userTp: userInfo[0].template,
  });
});

router.get("/test", (req, res) => {
  res.send({ message: "자고싶다" });
});

router.get("/edit/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("posts/edit", { post: post });
});

router.post(
  "/new",
  async (req, res, next) => {
    req.post = new Post();
    // console.log("dsfsdf");
    next();
  },
  savePostAndRedirect("new")
);

router.put(
  "/:id",
  async (req, res, next) => {
    req.post = await Post.findById(req.params.id);
    next();
  },
  savePostAndRedirect("edit")
);

router.delete("/delete", async (req, res) => {
  await Post.findByIdAndDelete(req.body.id);

  res.redirect("/");
});

function savePostAndRedirect(path) {
  return async (req, res) => {
    console.log(req.body.post);
    let post = req.post;
    post.title = req.body.post.title;
    post.description = req.body.post.description;
    post.markdown = req.body.post.markdown;
    post.thumbnail = req.body.post.thumbnail;
    post.author = req.body.post.author;
    try {
      post = await post.save();
      console.log(post);
      res.send({
        message: "hi",
      });
    } catch (e) {
      // res.render(`posts/${path}`, { post: post });
      console.log(e);
    }
  };
}

module.exports = router;
