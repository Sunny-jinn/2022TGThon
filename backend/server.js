const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");
const User = require("./models/user");
const postRouter = require("./routes/posts");
const userRouter = require("./routes/auth");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const imgRouter = require("./routes/img");
const morgan = require("morgan");
const path = require("path");

const passportConfig = require("./passport");
passportConfig();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

app.listen(5000);
