const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();
const { User } = require("../models");

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get("/login", isNotLoggedIn, (req, res) => {
  res.render("login");
});

router.get("/register", isNotLoggedIn, (req, res) => {
  res.render("register");
});

router.get("/", async (req, res, next) => {
  const posts = [];
  res.render("main");
});

module.exports = router;
