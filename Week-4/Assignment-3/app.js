const express = require("express");
const body_parser = require("body-parser");
const cookie_parser = require("cookie-parser");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6504187",
  password: "LV19pqBPkG",
  database: "sql6504187",
});
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

app.get("/signin", (req, res) => {
  res.render("./signin");
});

app.get("/signup", (req, res) => {
  res.render("./signup");
});

app.get("/logout", (req, res) => {
  res.clearCookie("email");
  res.redirect("/");
});

async function db_query(sql) {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) reject(err);
      else {
        //console.log("db_query");
        //console.log(typeof result);
        resolve(result);
      }
    });
  });
}

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  let sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
  let result = await db_query(sql);
  if (result.length === 0) {
    console.log("invalid data.");
    res.redirect("/");
  } else {
    res.cookie("email", req.body.email);
    res.redirect("/");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  let sql_check = `SELECT * FROM users WHERE email = '${email}'`;
  let reg_check = await db_query(sql_check);

  if (reg_check.length > 0) {
    console.log("user existed. try again.");
    res.redirect("/");
  } else {
    res.cookie("email", req.body.email);
    let sql = `INSERT INTO users SET email = '${email}', password = '${password}'`;
    let reg_result = await db_query(sql);
    res.cookie("email", req.body.email);
    res.redirect("/");
  }
});

app.get("/", (req, res) => {
  const user_email = req.cookies.email;
  if (user_email) {
    res.render("index", { user_email });
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
    "CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(`table "${sql.split(" ")[2]}" created.`);
  });
});

app.listen(3000, () => {
  console.log("The server is running on localhost:3000");
});
