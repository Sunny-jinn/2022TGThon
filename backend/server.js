const express = require("express");
const path = require("path");
const morgan = require("morgan");
const Post = require("./models/post");
const User = require("./models/user");
const postRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const imgRouter = require("./routes/img");
const mongoose = require("mongoose");
const passportConfig = require("./passport");
passportConfig();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect(
//   "mongodb://leejeongwoo:1234@127.0.0.1:27017/admin",
//   {
//     dbName: "blog1",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (error) => {
//     if (error) {
//       console.log("몽고디비에러", error);
//     } else {
//       console.log("몽고디비연결성공");
//     }
//   }
// );
// .env 파일 사용
dotenv.config();

// app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", async (req, res) => {
  const posts = await Post.find().sort({
    createdAt: "desc", //최신순으로 정렬
  });
});

app.use("/img", imgRouter);

app.use("/posts", postRouter);
app.use("/user", userRouter);

//오류처리 미들웨어
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url}라우터가 없습니다`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  //res.render("error");
});

// port연결
app.listen(5000, () => {
  console.log("5000번 포트에서 대기중");
});
