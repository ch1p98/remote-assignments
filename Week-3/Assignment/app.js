const express = require("express");
const body_parser = require("body-parser");
const cookie_parser = require("cookie-parser");

const app = express();

// parse the request and let req.body become usable to me
app.use(body_parser.urlencoded({ extended: false }));
app.use(cookie_parser());
app.set("view engine", "pug");
app.use(express.static("public"));

const index_routes = require("./routes");
const fanpage = require("./routes/fanpage");
const character = require("./routes/character");
const data = require("./routes/data");
const myName = require("./routes/myName");
const trackName = require("./routes/trackName");

app.use(index_routes);
app.use("/fanpage", fanpage);
app.use("/character", character);
app.use("/data", data);
app.use("/myName", myName);
app.use("/trackName", trackName);

app.listen(3000, () => {
  console.log("The server is running on hocalhost:3000");
});
