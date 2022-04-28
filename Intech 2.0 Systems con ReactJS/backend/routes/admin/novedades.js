var express = require("express");
const async = require("hbs/lib/async");
var router = express.Router();
const novedadesModels = require("./../../models/novedadesModels");

/* GET home page. */
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModels.getNovedades();

  res.render("admin/novedades", {
    layout: "admin/layout",
    nav: true,
    novedades,
  });
});

// Ruteo al form Agregar novedades
router.get("/add", async function (req, res, next) {
  res.render("admin/novedades/add", { layout: "admin/layout", nav: false });
});

// Inserto la Novedad
router.post("/add", async (req, res, next) => {
  try {
    if (
      req.body.titulo != "" &&
      req.body.subtitulo != "" &&
      req.body.cuerpo != ""
    ) {
      await novedadesModels.addNovedades(req.body);
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/novedades/add", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son onligatorios",
      });
    }
  } catch {
    console.log(error);
    res.render("admin/novedades/add", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la novedad",
    });
  }
});

// Eliminar Novedad
router.get('/delete/:id',async (req, res, next) =>{
  let id = req.params.id;
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
    let obj={
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
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
