var express = require('express');
var login = require('Scripts/login');

var app = express()

//connection string
var conn = mysql.createConnection({
    host     : 'vulcan.mwd.hartford.edu',
    database : 'mwd410',
    user     : 'user123',
    password : 'password12356'
});


conn.connect();


var SQL = 'SELECT * FROM test';
conn.query(SQL,function(err,res,fields){
    if(err){ throw err; }
    //console.log(fields);
    for(var i = 0; i < res.length; i++){
        console.log(res[i]); //(id:1,data:'Hello'}
    }
});


conn.end();

app.listen(8080, () => console.log('Example app listening on port 8080!'))
