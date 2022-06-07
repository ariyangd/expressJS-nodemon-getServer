const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>");
});


app.get("/contract", function (req, res) {
    res.send("Hi there");
});

app.get("/about", function (req, res) {
    res.send("Hi its me Ariyan Rehman, I owns this Website.");
});

app.listen(3000, function () {
    console.log("Started on 3000");
});