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
	$("button").click(function(){
		var url = $(this).attr("id");
		$.get(url, function(response){
			var resText;
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


	$.post("piglatin", name, function(response) {
var piglatinified = response.firstname + " " +
response.lastname; $("#piglatinified").text(piglatinified);
});
})*/

