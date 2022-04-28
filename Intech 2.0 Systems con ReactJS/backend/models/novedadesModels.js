const async = require('hbs/lib/async');
const mysqlConnection = require('./db'); //llamado a la BD

// Consultar novedades
async function getNovedades(){
    try{
        var query = 'SELECT * FROM `news` ORDER BY IdNews';
        var rows = await mysqlConnection.query(query);
        return rows;
    }catch (error){
        console.log(error);
    }
}

// Inserta una nueva novedad
async function addNovedades(obj){
    try{
        var query = 'INSERT INTO `news` SET ?';
        var rows = await mysqlConnection.query(query,[obj]);
        return rows;
    }catch (error){
        console.log(error);
    }
}

//Eliminar novedad por ID
async function deleteNovedadByID(id){
    var query = 'DELETE FROM `news` WHERE IdNews = ?';
    var rows = await mysqlConnection.query(query,[id]);
    return rows;
} 

// Buscar novedad por ID
async function getNovedadesByID(id){
    try{
        var query = 'SELECT * FROM `news` WHERE IdNews = ?';
        var rows = await mysqlConnection.query(query, [id]);
        return rows[0];
    }catch (error){
        console.log(error);
    }
}

// Modifico novedad por ID
async function updateNovedadesByID(obj, id){
    try{
        var query = 'UPDATE `news` SET ? WHERE IdNews = ?';
        var rows = await mysqlConnection.query(query, [obj, id]);
        return rows[0];
    }catch (error){
        console.log(error);
    }
}

module.exports = {getNovedades, addNovedades, deleteNovedadByID, getNovedadesByID, updateNovedadesByID};