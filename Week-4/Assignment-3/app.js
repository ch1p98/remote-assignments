const express = require("express");
const body_parser = require("body-parser");
const cookie_parser = require("cookie-parser");

const app = express();
app.use(body_parser.urlencoded({ extended: false }));
app.use(cookie_parser());

app.get("/", (req, res) => {
  let name = "Alex";
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("The server is running on localhost:3000");
});
