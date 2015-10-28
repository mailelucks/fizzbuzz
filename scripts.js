$(document).ready(function() {

function fizzBuzz(){
	for (var i = 0; i <= 100; i++) {
		if (i % 3 === 0) { 
			$('.list').append("<p>Fizz</p>");
		}
		else if (i % 5 === 0) {
			$('.list').append("<p>Buzz</p>");
		}
		else if ( (i % 3 === 0) && (i % 5 === 0) ) {
			$('.list').append("<p>FizzBuzz</p>");
		}
		else {
			$('.list').append("<p>" + i + "</p>");
		}
	};
}

});