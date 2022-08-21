const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const User = require("../models/user");

const router = express.Router();

router.post("/register", isNotLoggedIn, async (req, res, next) => {
  console.log("회원가입중");
  const { id, password, name, number } = req.body.user;
  try {
    const exUser = await User.find({ number: number });
    const exUserr = await User.find({ id: id });
    // console.log(exUser);
    // console.log(exUserr);
    console.log(exUser[0] !== undefined);
    console.log(exUserr);
    if (exUser[0] !== undefined || exUserr[0] !== undefined) {
      return res.redirect("/register?error=exist");
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      id: id,
      password: hash,
      name: name,
      number: number,
    });
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/login", (req, res, next) => {
  console.log(req);

  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      console.error(1111111);
      return next(authError);
    }
    if (!user) {
      console.error(222222);
      console.log(info.message);
      console.log(user);

      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        console.error(33333);

        return next(loginError);
      }
      console.log(234);
      return res.redirect("/posts");
    });
  })(req, res, next);
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router;
