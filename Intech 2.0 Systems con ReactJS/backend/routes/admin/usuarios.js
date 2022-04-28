var express = require('express');
var router = express.Router();
const usuariosModels = require('./../../models/usuariosModels');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/usuarios', { layout: 'admin/layout',nav:true });
});

module.exports = router;