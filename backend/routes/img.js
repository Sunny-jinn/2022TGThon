const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const iconv = require("iconv-lite");

const Img = require("../models/img");
const post = require("../models/post");
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
      const filename = iconv.decode(file.originalname, "utf-8");

      const ext = path.extname(filename);
      cb(null, path.basename(filename, ext) + "_" + Date.now() + ext);
    },
  }),
  limits: { fileSize: 100 * 1024 * 1024 },
});

router.post("/", upload.single("img"), (req, res) => {
  // console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});

const uploadDb = multer();
router.post("/", uploadDb.none(), async (req, res, next) => {
  console.log(req.body);
  try {
    await Img.create({
      img: req.body.url,
    });

    console.log("Success!");
    res.send({ thumbPath: req.file.filename });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
