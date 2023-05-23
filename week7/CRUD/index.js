const express = require("express");
var mysql = require("mysql");
const app = express();
const server = app.listen(3000, function () {
  console.log("Express server start port 3000 !!");
});

// C: create - 회원 만들기 POST
// R: read - 회원 정보 읽기 GET
// U: update - 회원 정보 수정하기 PATCH
// D: delete - 회원 삭제하기 DELETE

// 회원 정보 읽기 get
app.get("/test", function (req, res) {
  const id = req.params.id;
  console.log("test");
  //1. db 연결
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "0000",
    database: "umc",
  });
  connection.connect();

  //2. userinfo 테이블에 있는 정보 가져오기
  const getUserQuery = `SELECT id,pw,userName,phone,address FROM user;`;
  const getUserResult = connection.query(
    getUserQuery,
    function (err, rows, fields) {
      if (err) {
        res.send("회원정보가 조회되지 않습니다.");
      } else {
        console.log(rows[0]);
        res.send(rows[0]);
      }
    }
  );
});

// 회원 만들기 post
app.post("/signup", function (req, res) {
  // 회원가입
  // db 연결
  const id = req.params.id;
  console.log("test");
  //1. db 연결
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "0000",
    database: "umc",
  });
  connection.connect();

  const postUserQuery = `INSERT INTO user (userName,phone,address,id,pw) VALUES ('김모씨','010-3333-2222','광주 광주시','kim',1111);`;
  const posTUserInfoResult = connection.query(
    postUserQuery,
    function (err, rows, fields) {
      console.log(err); // 에러가 있다면
      console.log(rows); // 결과 출력
    }
  );
});

// 회원 정보 삭제 delete
app.delete("/delete", function (req, res) {
  // 회원가입
  // db 연결
  const id = req.params.id;
  console.log("test");
  //1. db 연결
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "0000",
    database: "umc",
  });
  connection.connect();

  const delUserQuery = `DELETE FROM user WHERE id='cho';`;
  const delUserInfoResult = connection.query(
    delUserQuery,
    function (err, rows, fields) {
      console.log(err); // 에러가 있다면
      console.log(rows); // 결과 출력
    }
  );
});

// 회원 정보 수정 patch
app.patch("/update", function (req, res) {
  console.log("test");
  //1. db 연결
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "0000",
    database: "umc",
  });
  connection.connect();

  const updateUserQuery = `UPDATE user SET pw=0000;`;
  const updateUserInfoResult = connection.query(
    updateUserQuery,
    function (err, rows, fields) {
      console.log(err); // 에러가 있다면
      console.log(rows); // 결과 출력
    }
  );
});
