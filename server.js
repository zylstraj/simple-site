var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var information	 = ["Do Better", "Try Harder", "You Got It", "Dont Stop Yet", "Awesome"];
function randomString(words) {

return words[Math.floor(Math.random() * words.length)];
}
app.get("/information", function(req, res){
	var todaysLearning = randomString(information);
	res.send(todaysLearning);
});
app.listen(port, function() {
	console.log('server started on port ' + port);
});

var jokes = [
{setup: "What's the difference between a guitar and a fish/", 
punchline: "you can't tuna fish."}, 
{setup: "Whats black and blue?",
punchline: "Your Mom!"},
{setup: "Why did no one hear Helen Keller fall off the mountain?",
punchline: "Because she had mittens on."}
];

app.get("/jokes", function(req, res){
	var yesyes = randomString(jokes);
	res.send(yesyes);
});