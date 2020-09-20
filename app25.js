//embeddedjs.com

var express = require('express');
var app = express();

//setting the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){ //req and res is extended by express
    res.sendFile(__dirname + '/contact.html');
});

//dynamic requesting of ID or name by using req.params.id
app.get('/profile/:name', function(req,res){
    var data = {age: 29, job:'ninja', hobbies: ['eating', 'fighting','fishing']};
    res.render('profile',{person: req.params.name, data: data});
});
//listen to a port
app.listen(3000);
