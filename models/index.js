const e = require("express");
const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb://leejeongwoo:1234@127.0.0.1:27017/admin",
    {
      dbName: "imgpost",
      useNewUrlParser: true,
    },
    (error) => {
      if (error) {
        console.log("몽고디비 연결 에러", erro);
      } else {
        console.log("몽고디비 연결 성공");
      }
    }
  );
};

module.exports = connect;
