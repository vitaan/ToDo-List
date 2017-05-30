var express = require('express');
var todoController=require('./controllers/todoController');
var app=express();

//set up template engine
app.set('view engine','ejs');

//static flies
app.use(express.static('./public'));


//fire controllers
todoController(app);


//listen to port
app.listen(3000);
console.log('Port 3000');

