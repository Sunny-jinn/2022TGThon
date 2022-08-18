const express = require("express");
const path = require("path");
const morgan = require("morgan");

const Post = require("./models/post");
const postRouter = require("./routes/posts");
const methodOverride = require("method-override");
const cors = require("cors");

const connect = require("./models");

const app = express();
app.set("port", process.env.PORT || 5000);
app.set("view engine", "ejs");
connect();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); //app.put과 app.delete를 사용하기 위한 과정
app.use(cors()); //다른 도메인에서 요청가능하게 하는 미들웨어

app.get("/", async (req, res) => {
  const posts = await Post.find().sort({
    createdAt: "desc", //최신순으로 정렬
  });
  res.render("posts/index", { posts: posts });
});

app.use("/posts", postRouter);

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
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
