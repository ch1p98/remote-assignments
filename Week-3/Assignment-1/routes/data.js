//
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //console.log(req.query);

  const number = req.query.number;
  let result;
  if (!number) {
    result = "Lack of Parameter";
  } else if (isNaN(number) || number < 0) {
    result = "Wrong Parameter";
  } else {
    result = (Number(number) * (Number(number) + 1)) / 2;
  }
  res.render("data", { result: result });
});

module.exports = router;
