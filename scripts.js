function fizzBuzz(){
	for (var i = 0; i <= 100; i++) {
		if (i % 3 === 0) { 
			$('.list').prepend("Fizz");
		}
		else if (i % 5 === 0) {
			$('.list').append("Buzz");
		}
		else if ((i % 3 === 0) && (i % 5 === 0)) {
			$('.list').append("FizzBuzz");
		}
		else {
			$('.list').append(i);
		}
	}
};