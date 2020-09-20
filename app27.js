//embeddedjs.com

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//setting the view engine to EJS
app.set('view engine', 'ejs');
//middleware setup for style sheet
//express.static is middleware function built in to serve static files
//express.static('assets') maps to asset folder within structure. The /assets before maps to URL link.
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
    res.render('index');
});

app.get('/contact', function(req,res){ //req and res is extended by express
    //console.log(req.query);
    res.render('contact',{qs: req.query});
});

//post requesting, middleware is urlencodedParser, then we can get it from req.body
app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    //console.log(req.query);
    res.render('contact-success',{data: req.body});
});

//dynamic requesting of ID or name by using req.params.id
app.get('/profile/:name', function(req,res){
    var data = {age: 29, job:'ninja', hobbies: ['eating', 'fighting','fishing']};
    res.render('profile',{person: req.params.name, data: data});
});
//listen to a port
app.listen(3000);
