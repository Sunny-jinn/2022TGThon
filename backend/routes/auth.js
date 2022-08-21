const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const User = require("../models/user");

const router = express.Router();

router.post("/register", isNotLoggedIn, async (req, res, next) => {
  const { id, password, name, number } = req.body.user;
  try {
    const exUser = await User.find({ number: number });
    const exUserr = await User.find({ id: id });
    console.log(exUser[0] == undefined);
    console.log(exUserr);
    if (exUser[0] !== undefined || exUserr[0] !== undefined) {
      res.redirect("/register?error=exist");
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      id: id,
      password: hash,
      name: name,
      number: number,
      template: "",
      color: "",
    });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect("/");
    });
  })(req, res, next);
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

router.post("/template", async (req, res) => {
  const { template, color, id } = req.body;
  const filter = { id: id };
  const update = { template: template, color: color };
  await User.findOneAndUpdate(filter, update, {
    new: true,
  }).then((response) => {
    console.log(response);
    res.send({ message: "success!" });
  });
});

module.exports = router;
