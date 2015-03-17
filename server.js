var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000; //listen to requests
// on port 3000 - that is what is going on here
// you can set port to something else but 3000 is standard

var piglatinify = require("./lib/piglatinify.js");
var basicYou = require("./lib/basicinfo.js");
var quotes = require("./lib/quotes.js");
var jokes = require("./lib/jokes.js");
//var favorite = require("./lib/favorite.js");
//var maybe = require("./lib/quotes.js");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//app.use(express.static(__dirname + "/app/"));

/*var information	 = ["Do Better", "Try Harder", "You Got It", "Dont Stop Yet", "Awesome"];
*/
app.use(express.static(__dirname + "/app/"));

var favorite = [
{ favoritestadium: "Wrigley Field",
reasoning: "The ivy is gorgeous and nothing beats the bleachers in the middle of summer!" },
{ favoritestadium: "Fenway Park",
reasoning: "The green monster" },
{ favoritestadium: "Dodger Stadium",
reasoning: "Los Angeles can not be beat. City baseball" }
];

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

app.get("/quote", function(req, res) {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	res.send(quotes[randomIndex]);
});
//app.get("/quote", maybe);

app.get("/joke", function(req, res) {
	var randomIndex = Math.floor(Math.random() * jokes.length);
	res.json(jokes[randomIndex]);
});

app.get("/favorite", function(req, res) {
	var randomIndex = Math.floor(Math.random() * favorite.length);
	res.json(favorite[randomIndex]);
});

app.listen(port, function() {
	console.log("server started on port " + port);
});
//starts server on local machine at port 3000 - this means
// to talk to the server - use this address

app.post("/piglatin", function(req, res) {
var firstname = piglatinify(req.body.firstname);
var lastname = piglatinify(req.body.lastname);
var piglatined = { firstname: firstname, lastname:
lastname };
res.json(piglatined);
});

app.post("/basic", function(req, res) {
	var first = basicYou(req.body.first);
	var last = basicYou(req.body.last);
	var birthcity = basicYou(req.body.birthcity);
	var basicinfo = { first: first, last: last, birthcity: birthcity };
	res.json(basicinfo);
});
