const express = require('express');
const app=express();

// Config
app.set('port',process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Rutas
app.use(require('./rutas/users'));

// Iniciar Servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
