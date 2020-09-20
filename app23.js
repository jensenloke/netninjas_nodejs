//express module tutorial
//Http Methods
//GET, POST, DELETE, PUT

//require
var express = require('express');

//setup of express app
var app = express();

//responding to get request and setup the route
app.get('/contact', function(req,res){ //req and res is extended by express
    res.send('this is the contact page')
});

app.get('/', function(req,res){
    res.send('this is the home page')
});

//dynamic requesting of ID or name by using req.params.id
app.get('/profile/:name', function(req,res){
    res.send('You requested to see a profile with name id of ' + req.params.name);
});

//listen to a port
app.listen(3000);


//https://www.youtube.com/watch?v=MuMs1pLuT7I&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=24
