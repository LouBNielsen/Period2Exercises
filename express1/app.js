var express = require('express'); //funktion som factory for applikation

var path = require('path');

var app = express(); //objektet app er en funktion

//vi skal nu implementere en webserver som vil lytte til en port, så man kan svare osv.
app.listen(8080, function(){
    console.log("ready on port 8080");
});


//definere routes
app.get('/', function(req, res){
    //res.send("Hello, express"); //sender response til klient. Man kan også skrive <html> inde i.
    res.render('index'); //view tool/enginge
}); //minder om http method. når en klient bruger get på vores url, repsonse med function

// configure,  app

app.set('view engine', 'ejs');
app.set('express1\views', path.join(__dirname), 'views'); 




