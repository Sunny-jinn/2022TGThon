const express = require("express");
const User = require("./../models/user");
const router = express.Router();

router.post("/register", async (req, res) => {
  console.log(req.body.user);
  let user = new User();
  user.id = req.body.user.id;
  user.password = req.body.user.password;
  user.name = req.body.user.name;
  user.number = req.body.user.number;
  try {
    user = await user.save();
    console.log("Success");
    res.send("Success");
  } catch (err) {
    console.log(err);
    res.send("Failed");
  }
});

router.post("/login", async (req, res) => {
  const userInfo = await User.find({ id: req.body.info.id });
  console.log(userInfo);
  if (userInfo.length === 0) {
    console.log("Id is not available");
    res.status(404).send({
      message: "Id is not found.",
    });
  } else if (userInfo[0].password !== req.body.info.password) {
    console.log("password is not available");
    res.status(403).send({
      message: "Password is not correct.",
    });
  } else {
    console.log("Login success!");
    res.status(200).send({
      message: "Login success!",
      color: userInfo[0].color,
      id: userInfo[0].id,
    });
  }
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

router.get("/userinfo/:id", async (req, res) => {
  await User.find({ id: req.params.id }).then((res) => {
    console.log(res[0].template);

    res.send({ template: res[0].template, color: res[0].color });
  });
});

module.exports = router;
