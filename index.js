var express = require("express");

var app = express();

app.get('/', function(req, res){
	res.send("Sajidullah Baig modified 4");
});

app.listen(3000);
console.log("listening on port: 3000");

module.exports = app;