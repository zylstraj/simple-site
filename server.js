var express = require("express"),
  http = require("http"),
  app = express();

var quotes = [
  "The answer to life the universe and everything is 42.",
  "I must not fear. Fear is the mind-killer. Fear is the little-death...",
  "Life can be so sweet on the sunny side of the street"
];

app.get("/inspiration", function (req, res){
  var randomIndex = Math.floor(Math.random()*quotes.length);
  res.send(quotes[randomIndex]);
});
app.get("/joke", function (req, res){
  res.send("beep");
});

app.get("/", function (req, res){
  res.sendFile(__dirname + '/hello.html');
});

console.log("server starting. available at http://localhost:3000");
http.createServer(app).listen(3000);
