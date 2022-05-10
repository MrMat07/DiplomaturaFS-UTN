var express = require('express');
var router = express.Router();
const usuariosModels = require('./../../models/usuariosModels');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { layout: 'admin/layout',nav:false});
});

// Logaout
router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.render('admin/login', { layout: 'admin/layout',nav:false });
});

router.post('/',async (req,res,next)=>{
  try{
    var usuario = req.body.NombreUsuario;
    var password = req.body.Clave;

    var data = await usuariosModels.getUser(usuario,password);

    if (data != undefined){
      req.session.id_usuario = data.IdUser;
      req.session.nombreusuario = data.NombreUsuario;
      req.session.nombre = data.Nombre;
      req.session.apellido = data.Apellido;
      req.session.mail = data.Mail;
      res.redirect('/admin/userHome');
    }else{
      res.render('admin/login',{
        layout:'admin/layout',
        error:true,
        nav:false
      });
    }
  }catch(error){
    console.log(error);
  }
});

module.exports = router;