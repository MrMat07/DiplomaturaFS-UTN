const mysqlConnection = require('./db'); //llamado a la BD
const md5 = require('md5');

async function getUser(user,password){
    try{
        var query = 'SELECT * FROM `users` WHERE NombreUsuario = ? AND Clave = ? LIMIT 1';
        var rows = await mysqlConnection.query(query,[user,md5(password)]);
        return rows[0];
    }catch (error){
        console.log(error);
    }
}


module.exports = {getUser};