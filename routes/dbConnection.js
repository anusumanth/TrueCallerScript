var mysql=require('mysql');

var connection = mysql.createConnection({ // Mysql Connection
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'TRUETest',
});

module.exports=connection