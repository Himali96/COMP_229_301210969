const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    //console.log(__dirname);
    res.sendFile(__dirname + "/myFirstPage.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("Calculating : " + result);
});

app.get("/contact", function(req, res){
    res.send("Contact me by mail: <h3>himalikothariedu@gmail.com</h3>");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Music</li><li>Dance</li></ul></h3>");
});

app.listen(3000, function() {
    console.log("Server has started");
});

