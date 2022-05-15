const mysql=require('mysql');
const util=require('util');

const mysqlConnection=mysql.createConnection({
   // connectionLimit:10,
    host:process.env.MYSQL_HOST,
    database:process.env.MYSQL_DB_NAME,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD
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

 mysqlConnection.query=util.promisify(mysqlConnection.query);

 module.exports=mysqlConnection;