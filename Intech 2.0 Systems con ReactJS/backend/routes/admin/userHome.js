var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("admin/userHome", {
    layout: "admin/layout",
    nombreusuario: req.session.nombreusuario,
    nombre: req.session.nombre,
    apellido: req.session.apellido,
    mail: req.session.mail,
  });
});

module.exports = router;
