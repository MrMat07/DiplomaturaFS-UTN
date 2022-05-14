const async = require('hbs/lib/async');
const mysqlConnection = require('./db'); //llamado a la BD

// Consultar promociones
async function getPromociones(){
    try{
        var query = 'SELECT * FROM `promotions` ORDER BY IdPromotion';
        var rows = await mysqlConnection.query(query);
        return rows;
    }catch (error){
        console.log(error);
    }
}

// Inserta una nueva promocion
async function addPromocion(obj){
    try{
        var query = 'INSERT INTO `promotions` SET ?';
        var rows = await mysqlConnection.query(query,[obj]);
        return rows;
    }catch (error){
        console.log(error);
    }
}

//Eliminar promocion por ID
async function deletePromocionByID(id){
    var query = 'DELETE FROM `promotions` WHERE IdPromotion = ?';
    var rows = await mysqlConnection.query(query,[id]);
    return rows;
} 

// Buscar promocion por ID
async function getPromocionByID(id){
    try{
        var query = 'SELECT * FROM `promotions` WHERE IdPromotion = ?';
        var rows = await mysqlConnection.query(query, [id]);
        return rows[0];
    }catch (error){
        console.log(error);
    }
}

// Modifico promocion por ID
async function updatePromocionByID(obj, id){
    try{
        var query = 'UPDATE `promotions` SET ? WHERE IdPromotion = ?';
        var rows = await mysqlConnection.query(query, [obj, id]);
        return rows[0];
    }catch (error){
        console.log(error);
    }
}

module.exports = {getPromociones, addPromocion, deletePromocionByID, getPromocionByID, updatePromocionByID};