const express = require("express");
const body_parser = require("body-parser");
const cookie_parser = require("cookie-parser");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
  host: "54.71.***.***",
  user: "root",
  password: "********",
  database: "assignment",
});
//connection
/*db.connect()
  .then(() => {
    console.log("connected to server.");
  })
  .catch((err) => {
    console.log(err);
  });*/

//tutorial edition
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected to server.");
});

app.use(body_parser.urlencoded({ extended: false }));
app.use(cookie_parser());
app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/signup", (req, res) => {
  res.render("./signup");
});

app.get("/signup", (req, res) => {
  res.render("./signup");
});

app.post("/signin", (req, res) => {});

app.post("/signup", (req, res) => {});

app.get("/", (req, res) => {
  const user_id = req.cookies.user_id;
  console.log(user_id);
  if (user_id) {
    res.render("index", { user_id });
  } else {
    res.redirect("/signup");
  }
});

app.get("/create_db", (req, res) => {
  const sql = "CREATE DATABASE assignment;";
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log(res);
    res.send(`database "${sql.split(" ")[2].split(";")[0]}" created.`);
  });
});

app.get("/create_table", (req, res) => {
  const sql =
    "CREATE TABLE users(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))";
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log(res);
    res.send(`table "${sql.split(" ")[2]}" created.`);
  });
});

app.listen(3000, () => {
  console.log("The server is running on localhost:3000");
});
