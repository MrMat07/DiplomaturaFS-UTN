var express = require("express");
const async = require("hbs/lib/async");
var router = express.Router();
const promocionesModels = require("./../../models/promocionesModels");
const util = require('util');
const { Console } = require("console");

/* GET home page. */
router.get("/", async function (req, res, next) {
  var promociones = await promocionesModels.getPromociones();

  promociones=promociones.map(promocion => {
      return{
        ...promocion
      }
  });

  res.render("admin/promociones", {
    layout: "admin/layout",
    nav: true,
    promociones
  });
});

// Ruteo al form Agregar promociones
router.get("/add", async function (req, res, next) {
  res.render("admin/promociones/add", { layout: "admin/layout", nav: false });
});

// Inserto la promocion
router.post("/add", async (req, res, next) => {
  try {

    if (
      req.body.titulo != "" &&
      req.body.precio != "" &&
      req.body.detalle != ""
    ) {
      await promocionesModels.addPromocion({
        ...req.body
      });
      res.redirect("/admin/promociones");
    } else {
      res.render("admin/promociones/add", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son onligatorios"
      });
    }
  } catch {
    console.log(error);
    res.render("admin/promociones/add", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la promocion"
    });
  }
});

// Eliminar promocion
router.get('/delete/:id',async (req, res, next) =>{
  let id = req.params.id;

  await promocionesModels.deletePromocionByID(id);
  res.redirect("/admin/promociones");
});

// Busca la promocion por el ID de la promocion seleccionada
router.get('/update/:id', async(req, res, next)=>{
  let id=req.params.id;
  let promocion = await promocionesModels.getPromocionByID(id);
   //console.log(id);
   //console.log(promocion);
  res.render('admin/promociones/update',{
    layout:'admin/layout',
    promocion
  });
});

// Modifica la promocion por el ID
router.post('/update',async(req, res, next)=>{
  try{
    let obj={
      titulo: req.body.titulo,
      precio: req.body.precio,
      detalle: req.body.detalle
    }
    await promocionesModels.updatePromocionByID(obj, req.body.id);
    res.redirect("/admin/promociones");
  }catch(error){
    console.log(error);
    res.render('admin/promociones/update',{
      layout:'admin/layout',
      error:true, message:'No se modifico la promocion'
    });
  }
})

module.exports = router;
