const express = require('express');
const req = require('express/lib/request');
const rutas = express.Router();

const mysqlConnection=require('../db');

rutas.get('/users/',(req,res) =>{
    mysqlConnection.query('SELECT * FROM ssec_user',(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

rutas.get('/users/:id',(req,res)=>{
    const {id}=req.params;
    mysqlConnection.query('SELECT * FROM ssec_user WHERE iduser=?',[id],(err,rows,fields) => {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    })
});

rutas.post('/AddUser/',(req,res)=>{
    const {iduser,nombre,apellido,mail,username,password} = req.body;
    const query=`
    CALL AddUpdateUser(?,?,?,?,?,?);
    `;
    mysqlConnection.query(query,[iduser,nombre,apellido,mail,username,password],(err,rows,fields) => {
        if(!err){
            res.json({Status: 'Usuario creado correctamente'});
        }else{
            console.log(err);
        }
    })
});

rutas.put('/UpdateUser/:iduser',(req,res)=>{
    const {nombre,apellido,mail,username,password} = req.body;
    const {iduser}=req.params;
    const query=`
    CALL AddUpdateUser(?,?,?,?,?,?);
    `;
    mysqlConnection.query(query,[iduser,nombre,apellido,mail,username,password],(err,rows,fields) => {
        if(!err){
            res.json({Status: 'Usuario actualizado correctamente'});
        }else{
            console.log(err);
        }
    })
});


rutas.delete('/DeleteUser/:iduser',(req,res)=>{
    const {iduser}=req.params;
    const query='DELETE FROM ssec_user WHERE iduser=?';
    mysqlConnection.query(query,[iduser],(err,rows,fields) => {
        if(!err){
            res.json({Status: 'Usuario elimindo correctamente'});
        }else{
            console.log(err);
        }
    })
});

module.exports=rutas;