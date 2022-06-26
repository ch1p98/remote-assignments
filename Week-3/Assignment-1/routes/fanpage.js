const express = require("express");
const router = express.Router();

let cv_twitter = {
  高橋李依: "https://twitter.com/taka8rie",
  竹達彩奈: "https://twitter.com/ayana_take",
  渕上舞: "https://twitter.com/fuchigami_mai",
  花澤香菜: "https://twitter.com/hanazawa_staff",
};

router.get("/", (req, res) => {
  const msg = req.cookies.cv_name;
  if (msg) {
    res.render("fanpage", { msg });
  } else {
    res.render("fanpage");
  }
});

router.post("/", (req, res) => {
  res.cookie("cv_name", req.body.cv_name);
  res.render("fanpage", {
    cv: cv_twitter[JSON.stringify(req.body.cv_name)],
    msg: req.body.cv_name,
  });
});

module.exports = router;
