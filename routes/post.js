const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Post = require("../models/post");

const router = express.Router();

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더 없어서 uploads폴더 생성");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/img", upload.single("img"), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});

const uploadDb = multer();
router.post("/", uploadDb.none(), async (req, res, next) => {
  console.log(req.body);
  try {
    await Post.create({
      img: req.body.url,
    });
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
