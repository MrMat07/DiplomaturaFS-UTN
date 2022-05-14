var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// declaro la libreria dotenv para que tome la config de la BD
require('dotenv').config();
// declaro la libreria express-session
var session = require('express-session');
// declaro la libreria fileupload
var fileUpload = require('express-fileupload');
// declaro la libreria cors
var cors = require('cors');

// Rutas ------------------------------------------------------------
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/userHome');
var novedadesRouter = require('./routes/admin/novedades');
var promocionesRouter = require('./routes/admin/promociones');
var apiRouter=require('./routes/api');
const { redirect } = require('express/lib/response');
// ------------------------------------------------------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// uso la variable session
app.use(session({
  secret:'v@ayx[TKq=#}5AqMpYVA',
  resave:false,
  saveUninitialized:true
}));

//  pregunto si tengo id de usuario
secured = async (req,res,next)=>{
  try{
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next();
    }else{
      res.redirect('/admin/login');
    }
  }catch(error){
    console.log(error);
  }
}

// activo el uso de temporales y le indico donde se guardan
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/temp/'
}));

app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/userHome',secured, adminRouter);
app.use('/admin/novedades',secured, novedadesRouter);
app.use('/admin/promociones',secured, promocionesRouter);
app.use('/api',cors(),apiRouter);

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
