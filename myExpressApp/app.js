const express = require('express');

const app = express();

app.use(function (res, res, next) {
    console.log("Hello, middelware");
    next();
});

app.use(function (req, res, next) {
    req.status = "SuperUser";
    next();
});


//definere routes
//minder om http method. når en klient bruger get på vores url, repsonse med function
app.get('/', (req, res) => {
    const status = req.status;
    res.send("Hello, express. You're status: " + status); //sender response til klient. Man kan også skrive <html> inde i.
    //res.render('index'); //view tool/enginge
});

// definerer en ny route
app.get('/world', (req, res) => {
    res.send("Hello, world!");
});

//implementere en webserver
app.listen(3333, () => console.log("ready on port 8080"));


