const express = require("express");
const Post = require("./../models/post");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("posts/new", { post: new Post() });
});

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({
    createdAt: "desc", //최신순으로 정렬
  });
  res.send({ posts: posts });
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
    let post = req.post;
    post.title = req.body.post.title;
    post.description = req.body.post.description;
    post.markdown = req.body.post.markdown;
    post.thumbnail = req.body.post.thumbnail;
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
