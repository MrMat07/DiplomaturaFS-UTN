var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Traigo la configuracion del archivo .env
require('dotenv').config();
// Creo la conexion con la bese de datos
const mysqlConnection=require('./models/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Select a la vista vEmpleados
mysqlConnection.query("SELECT * FROM `vempleados`").then(function(resultados)
{
  console.log(resultados);
});

// Insert a la tabla Empleados
// const obj = {
//   nombre:'Matias', 
//   apellido:'Monti', 
//   trabajo:'1', 
//   edad:'26', 
//   salario:'120000', 
//   mail:'mmonti@i2s.com.ar'
// }

// mysqlConnection.query("INSERT INTO `empleados` SET ?",[obj]).then(function(resultados)
// {
//   console.log(resultados);
// });

// Update a la tabla Empleados
// var idEmpleado = 21;
// const obj = { 
//   trabajo:'6'
// }

// // mysqlConnection.query("SELECT MAX(`IdEmpleado`) FROM `empleados`").then(function(resultados)
// // {
// //   idEmpleado == resultados;
// //   console.log(idEmpleado);
// // });

// mysqlConnection.query("UPDATE  `empleados` SET ? WHERE `IdEmpleado` = ?",[obj , idEmpleado]).then(function(resultados)
// {
//    console.log(resultados);
// });

// Delete a la tabla Empleados
// var idEmpleado = 21;

// mysqlConnection.query("DELETE FROM `empleados` WHERE `IdEmpleado` = ?",[idEmpleado]).then(function(resultados)
// {
//    console.log(resultados);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
