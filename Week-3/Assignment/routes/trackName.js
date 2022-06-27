const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.cookie("myName", req.body.myName);
  res.redirect("myName");
});

router.get("/", (req, res) => {
  let myName = req.query.name;
  if (!myName) {
    myName = "Chipmunk";
  }
  res.cookie("myName", myName);
  res.redirect("myName");
});

module.exports = router;
