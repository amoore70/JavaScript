var x = 5,
	interval = setInterval(function() {
		console.log(x);

		if(x === 1) {
			clearInterval(interval);
		}

		x--;

	}, 1000);