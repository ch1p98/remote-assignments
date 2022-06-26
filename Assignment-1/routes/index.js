const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const cv_name = req.cookies.cv_name;
  if (cv_name) {
    res.render("index", { cv_name });
  } else {
    res.redirect("/fanpage");
  }
});

router.get("/secret", (req, res) => {
  let friends = ["Kay", "Darjeeling", "Maho", "Erika", "Katyusha"];
  res.render("secret", {
    character: "西住美穗",
    data: "1023 2年A組",
    friends: friends,
  });
});

router.get("/reset", (req, res) => {
  const cv_name = req.cookies.cv_name;
  if (cv_name) {
    res.clearCookie("cv_name");
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
