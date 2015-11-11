$(document).ready(function() {

function fizzBuzz(){
	for (var i = 1; i <= 100; i++) {
		if ( (i % 3 === 0) && (i % 5 === 0) ){ 
			var output = "FizzBuzz";
			$('.list').append(output + "<br/>");
		}
		else if (i % 5 === 0) {
			var output = "Buzz";
			$('.list').append(output + "<br/>");
		}
		else if (i % 3 === 0) {
			var output = "Fizz";
			$('.list').append(output + "<br/>");
		}
		else {
			var output = i;
			$('.list').append(output + "<br/>");
		}
	};
}

fizzBuzz();

});