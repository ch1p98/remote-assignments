const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const myName = req.cookies.myName;
  console.log(myName);
  if (myName) {
    res.render("myName", { myName });
  } else {
    res.render("myName");
  }
});

module.exports = router;
