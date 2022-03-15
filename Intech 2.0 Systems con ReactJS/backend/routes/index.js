var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("admin/login", { title: "Admin/Login" });
});

module.exports = router;
