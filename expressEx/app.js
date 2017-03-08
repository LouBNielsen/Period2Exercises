var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }
    req.calc = calculatorRequest;
    next();
})

app.listen(3000, function () {
    console.log("Server started, listening on: " + 3000);
})

app.get("/", function (req, res) {
    res.send("hej - gå videre til næste url");
});

app.get("/api/calculator/*", function (req, res) {

    var ope = req.calc;

    switch (ope.operation) {
        case "add":
            res.send("Result: " + (ope.n1 + ope.n2));
            break;
        case "minus":
            res.send("Result: " + (ope.n1 - ope.n2));
            break;
        case "times":
            res.send("Result: " + (ope.n1 * ope.n2));
            break;
        case "div":
            res.send("Result: " + (ope.n1 / ope.n2));
            break;
    }
})

module.exports = app;