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
var favorite = require("./lib/favorite.js");
//var maybe = require("./lib/quotes.js");
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({extended: true}));

//app.use(express.static(__dirname + "/app/"));

/*var information	 = ["Do Better", "Try Harder", "You Got It", "Dont Stop Yet", "Awesome"];
*/
app.use(express.static(__dirname + "/app/"));

/*app.get("/", function(req, res){
	res.sendFile("index.html");
});

function randomString(words) {

return words[Math.floor(Math.random() * words.length)];
}
app.get("/information", function(req, res){s
	var todaysLearning = randomString(information);
	res.send(todaysLearning);
});*/
//var quotes = ["Try Hard", "Be True To You", "Love", "Generosity"];

/* var jokes = [
{ setup: "What's the difference between a guitar and a fish?", 
punchline: "you can't tuna fish."}, 
{setup: "Whats black and blue?",
punchline: "Your Mom!"},
{setup: "Why did no one hear Helen Keller fall off the mountain?",
punchline: "Because she had mittens on."}
];*/

var favorite = [
{ favoritestadium: "Wrigley Field",
reasoning: "The ivy is gorgeous and nothing beats the bleachers in the middle of summer!"},
{ favoritestadium: "Fenway Park",
reasoning: "The green monster"},
{ favoritestadium : "Dodger Stadium",
reasoning: "Los Angeles can not be beat. City baseball"}
]

app.get("/", function(req, res){
	res.sendFile("index.html");
});

app.get("/quote", function(req, res){
	var randomIndex = Math.floor(Math.random()*quotes.length);
	res.send(quotes[randomIndex]);
});
//app.get("/quote", maybe);

app.get("/joke", function(req, res){
	var randomIndex = Math.floor(Math.random() * jokes.length);
	res.json(jokes[randomIndex]);
});

app.get("/favorite", function(req, res){
	var randomIndex = Math.floor(Math.random() * favorite.length);
	res.json(favorite[randomIndex]);
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});
//starts server on local machine at port 3000 - this means
// to talk to the server - use this address

/*var quotes = ["Do Better", "Try Harder", "You Got It", "Dont Stop Yet", "Awesome"];

app.get("/quote", function (req, res){
var randomIndex = Math.floor(Math.random()*quotes.length);
res.send(quotes[randomIndex]); });*/


/*function piglatinify(word) {
	var wordArray = word.split("");
	var letters;
	var changedWord;
	var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1, I: 1, O: 1, U: 1};

	if (vowelHash.hasOwnProperty(wordArray[0])) { 
		return word + "-hay";
}
	letters = wordArray.shift();
	changedWord = wordArray.join("") + "-" + letters + "ay";
	return changedWord;

}*/

/*function basicYou(info) {
	//var fun = info.split("");
	//var funtimes;
	console.log(info);
	return info.toUpperCase();
	//return info.charAt(0).toUpperCase() + info.substring(1);
}*/

app.post("/piglatin", function(req, res) {
var firstname = piglatinify(req.body.firstname); 
var lastname = piglatinify(req.body.lastname); 
var piglatined = {firstname: firstname, lastname:
lastname}; 
res.json(piglatined);
});

app.post("/basic", function(req, res) {
	var first = basicYou(req.body.first);
	var last = basicYou(req.body.last);
	var birthcity = basicYou(req.body.birthcity);
	var basicinfo = {first: first, last: last, birthcity: birthcity};
	res.json(basicinfo);
})

/*var favorite = [
{ favoritestadium: "Wrigley Field",
reasoning: "The ivy is gorgeous and nothing beats the bleachers in the middle of summer!"},
{ favoritestadium: "Fenway Park",
reasoning: "The green monster"},
{ favoritestadium : "Dodger Stadium",
reasoning: "Los Angeles can not be beat. City baseball"}
]*/

/*This part of the code simply creates the array containing 3 objects
QUESTION - (Am I supposed to create this as a JSON object - - or did something like
	//this work and we we doing simliar thing to jokes?*/

/*app.get("/stadium", function(req, res){
	var randomIndex = Math.floor(Math.random() * favorite.length);
	res.json(favorite[randomIndex]);
	});*/
	/*the first argument of app.get creates the endpoint stadium
	when this first argument is trigger, 
	it activates the second function */

/*this creates a random index based off the length of the 
 JS object favorite */

/*res responds by sending by a JSON object of the JS object favorite
but it only sends the index which was created/access by the previous 
line of code*/


/*yesyes = randomString(jokes);
	res.send(yesyes);
}); */
