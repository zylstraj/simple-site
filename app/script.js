/*$(document).ready(function(){
	
	function randomString() {

var information = ["Do Better", "Try Harder", "You Got It", "Dont Stop Yet", "Awesome"];*/

var information	 = ["Do Better", "Try Harder", "You Got It", "Dont Stop Yet", "Awesome"];

function randomString(item) {
var randomIndex = item[Math.floor(Math.random() * item.length)];
return randomIndex;
}

/*	$('button').on('click', randomString());
})

var randomIndex = Math.floor(Math.random()*information.length);function randomString(words) {

return words[Math.floor(Math.random() * words.length)];
}
*/
/*$(function(){
	$("button").click(function(){
		$.get("http://localhost:3000/quote", function(response){
		$("#ajax-text").text(response);

		});
	});
});*/
$(function(){
	$(document).ready(function(){
		$.get("http://localhost:3000/favorite", function(response){
			$("#ajax-learning").text(response.favoritestadium + ": " + response.reasoning);
			console.log(response);
		});
	});
});

$(function(){
	$("button").click(function(){
		var url = $(this).attr("id");
		$.get(url, function(response){
			var resText;
			console.log(response);
			if(typeof response === "object"){
				resText = response.setup + ": " + response.punchline;
			} else {
				resText = response;
			}
			$("#ajax-text").text(resText);

		});
	});
});

/* $.get("http://localhost:3000/quote", function(response){
$("#ajax-text").text(response);
});
/*$(function() {
	$("button").click(function() {
		$.get("http://localhost:3000/stadium", function(response){
			var resText;
			if (typeof response === "object") {
				resText = response.setup + ": " + response.punchline;
			} else {
				resText = response	;
			}
			$("#ajax-text").text(resText);
	});
});*/

/*$(function() {
$("button").click(function() {
var url = $(this)attr("id");

$.get(url, function(response) { 
	var resText; 
	if (typeof response === "object") {
		resText = response.favoritestadium + ": " + response.reasoning;
	} else {
		resText = response;
	}
	console.log(response);
	$("#ajax-text").text(response.favoritestadium + ": " + response.reasoning);
	}); 
	});
});*/
/*$(function() {
	$('button').click(function(){
		$.get("http://localhost:3000/stadium", function(response){
		$("#ajax-text").text(response.favoritestadium + ": " + response.reasoning);
	});
});
});*/

/*$(function(){
		$("button").click(function(){
			$.get("http://localhost:3000/quote", function(response){
				$("ajax-text").text(response);
			});
		});
});*/
/*$("#piglatin").on("submit", function(e) {
	e.preventDefault();
	var firstname = $('input[name=firstname]').val();
	var lastname = $('input[name=lastname]').val();
	var name = {firstname: firstname, lastname: lastname};
	console.log(name);
	$.post("piglatin", name, function(response) {
var piglatinified = response.firstname + " " +
response.lastname; $("#piglatinified").text(piglatinified);
});
});*/

$("#piglatin").on("submit", function(e) {
	e.preventDefault();
	var firstname = $('input[name=firstname]').val();
	var lastname = $('input[name=lastname]').val();
	var name = {firstname: firstname, lastname: lastname};
	console.log(name);
	$.post("piglatin", name, function(response) {
		var piglatinified = response.firstname + " " +
response.lastname; 
		$("#piglatinified").text(piglatinified);
	});
});

$("#basic").on("submit", function(e) {
	e.preventDefault();
	var first = $('input[name=first]').val();
	var last = $('input[name=last]').val();
	var birthcity = $('input[name=birthcity]').val();
	var something = {first: first, last: last, birthcity: birthcity};
	console.log(something);
	$.post("basic", something, function(response) {
var basicified = response.first + " " +
response.last + " from " + response.birthcity; 
$("#basicinformation").text(basicified);
});
});

/*$("#basic").on("submit", function(e) {
	e.preventDefault();
	var firstname = $('input[name=firstname]').val();
	var lastname = $('input[name=lastname]').val();
	var birthcity = $('input[name = birthcity]').val();
	var basicinfo = {firstname: firstname, lastname: lastname, birthcity: birthcity};
	console.log(basicinfo);

	$.post("basic", basicinfo, function(response) {
		var whoyouare = response.firstname + " " + response.lastname + " from " + response.birthcity;
		$("#basicinformation").text(whoyouare);
	});
});*/