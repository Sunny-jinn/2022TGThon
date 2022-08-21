const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const User = require("../models/user");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "password",
      },
      async (id, password, done) => {
        try {
          const exUser = await User.findOne({ id: id });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            console.log(10);

            if (result) {
              done(null, exUser);
              console.log(20);
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다" });
              // console.log(3);
            }
          } else {
            done(null, false, { message: "가입되지 않은 회원입니다" });
            // console.log(4);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
