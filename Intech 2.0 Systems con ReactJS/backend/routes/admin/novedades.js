var express = require('express');
var router = express.Router();
// const usuariosModels = require('./../../models/novedadesModels');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/novedades', { layout: 'admin/layout' });
});

module.exports = router;