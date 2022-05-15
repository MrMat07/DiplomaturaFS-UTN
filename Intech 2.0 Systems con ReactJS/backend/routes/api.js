var express = require("express");
var router = express.Router();
const novedadesModels = require("./../models/novedadesModels");
const promocionesModels = require("./../models/promocionesModels");
const cloudinary = require("cloudinary").v2;
const nodemailer = require("nodemailer");
const async = require("hbs/lib/async");

// -------------------------------------------------------- NOVEDADES -------------------------------------------------------- //
router.get("/novedades", async function (req, res, next) {
  var novedades = await novedadesModels.getNovedades();

  novedades = novedades.map((novedades) => {
    if (novedades.img) {
      const imagen = cloudinary.url(novedades.img, {
        width: 1000,
        height: 800,
        crop: "fill",
      });
      return {
        ...novedades,
        imagen,
      };
    } else {
      return {
        ...novedades,
        imagen: "",
      };
    }
  });

  res.json(novedades);
});
// -------------------------------------------------------- NOVEDADES -------------------------------------------------------- //

// -------------------------------------------------------- ENVIO DE MAIL -------------------------------------------------------- //
router.post("/contactos", async (req, res) => {
  const mail = {
    to: "matigaris@gmail.com",
    subject: "Consulta Web",
    html: `${req.body.nombre} se contacto a traves de la web y quiere más informacion a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su telefono es: ${req.body.telefono}`
  };//Cierra mensaje

console.log(`${req.body.nombre}`);

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });//Cierra trasport

  await transport.sendMail(mail);

  res.status(201).json({
    error:false,
    message:'Mensaje Enviado'
  });

});
// -------------------------------------------------------- ENVIO DE MAIL -------------------------------------------------------- //

// -------------------------------------------------------- PROMOCIONES -------------------------------------------------------- //
router.get("/promociones", async function (req, res, next) {
  var promociones = await promocionesModels.getPromociones();

  promociones = promociones.map((promociones) => {
      return {
        ...promociones
      };
  });

  res.json(promociones);
});
// -------------------------------------------------------- PROMOCIONES -------------------------------------------------------- //

module.exports = router;
