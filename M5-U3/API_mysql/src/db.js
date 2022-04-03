const mysql=require('mysql');


const mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'Admin1',
    password:'Admin1234',
    database:'Example1'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db ok');
    }
}
 );

 module.exports=mysqlConnection;