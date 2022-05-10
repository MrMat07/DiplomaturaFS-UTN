var express = require("express");
const async = require("hbs/lib/async");
var router = express.Router();
const novedadesModels = require("./../../models/novedadesModels");
const util = require('util');
const cloudinary=require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModels.getNovedades();

  novedades=novedades.map(novedad => {
    if(novedad.img){
      const imagen= cloudinary.image(novedad.img, {
        width:100,
        height:100,
        crop:'fill'
      });
      return{
        ...novedad,
        imagen
      }
    }else{
      return{
        ...novedad,
        imagen:''
      }
    }
  });

  res.render("admin/novedades", {
    layout: "admin/layout",
    nav: true,
    novedades
  });
});

// Ruteo al form Agregar novedades
router.get("/add", async function (req, res, next) {
  res.render("admin/novedades/add", { layout: "admin/layout", nav: false });
});

// Inserto la Novedad
router.post("/add", async (req, res, next) => {
  try {
    let img='';
    if(req.files && Object.keys(req.files).length>0){
      imagen=req.files.imagen;
      img=(await uploader(imagen.tempFilePath)).public_id;
    }

    if (
      req.body.titulo != "" &&
      req.body.subtitulo != "" &&
      req.body.cuerpo != ""
    ) {
      await novedadesModels.addNovedades({
        ...req.body,
        img
      });
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/novedades/add", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son onligatorios"
      });
    }
  } catch {
    console.log(error);
    res.render("admin/novedades/add", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la novedad"
    });
  }
});

// Eliminar Novedad
router.get('/delete/:id',async (req, res, next) =>{
  let id = req.params.id;

  let novedad = await novedadesModels.getNovedadesByID(id);
  if(novedad.img){
    await(destroy(novedad.img));
  }

  await novedadesModels.deleteNovedadByID(id);
  res.redirect("/admin/novedades");
});

// Busca la novedad por el ID de la novedad seleccionada
router.get('/update/:id', async(req, res, next)=>{
  let id=req.params.id;
  let novedad = await novedadesModels.getNovedadesByID(id);
  // console.log(id);
  // console.log(novedad);
  res.render('admin/novedades/update',{
    layout:'admin/layout',
    novedad
  });
});

// Modifica la novedad por el ID
router.post('/update',async(req, res, next)=>{
  try{

    let img = req.body.img_original;
    let borrar_img_vieja = false;

    if(req.body.img_delete==="1"){
      img=null;
      borrar_img_vieja=true;
    }else{
      if(req.files && Object.keys(req.files).length>0){
        imagen=req.files.imagen;
        img=(await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja=true;
      }
    }

    if(borrar_img_vieja && req.body.img_original){
      await (destroy(req.body.img_original));
    }

    let obj={
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img
    }
    await novedadesModels.updateNovedadesByID(obj, req.body.id);
    res.redirect("/admin/novedades");
  }catch(error){
    console.log(error);
    res.render('admin/novedades/update',{
      layout:'admin/layout',
      error:true, message:'No se modifico la novedad'
    });
  }
})

module.exports = router;
