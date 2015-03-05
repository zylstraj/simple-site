$(document).ready(function(){
	
	function randomString() {

var information = ["Do Better", "Try Harder", "You Got It", "Dont Stop Yet", "Awesome"];

return information[Math.floor(Math.random() * information.length)];
}

	$('button').on('click', randomString());
})

var information	 = ["Do Better", "Try Harder", "You Got It", "Dont Stop Yet", "Awesome"];
function randomString(words) {

return words[Math.floor(Math.random() * words.length)];
}