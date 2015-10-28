function fizzBuzz(){
	for (var i = 0; i <= 100; i++) {
		if (i % 3 === 0) { 
			$('.list').writeln("Fizz");
		}
		else if (i % 5 === 0) {
			$('.list').writeln("Buzz");
		}
		else if (i % 3 === 0 && i % 5 === 0) {
			$('.list').writeln("FizzBuzz");
		}
		else {
			$('.list').writeln(i);
		}
	}
};