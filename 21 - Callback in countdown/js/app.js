var app = {};

app.countdown = function(settings, callback) {
	var interval,
		counter = 0,

		// Start and end points
		startAt = 0,
		endAt = 0;

	if(settings === undefined) {
		console.log('Please provide settings.');
	} else {
		if(settings.startAt === undefined || settings.endAt === undefined) {
			console.log('Start and end number are required.');
		} else {

			startAt = parseInt(settings.startAt, 10);
			endAt = parseInt(settings.endAt, 10);

			if(!isNaN(startAt) && !isNaN(endAt)) {
				counter = startAt;

				interval = setInterval(function() {

					if(counter < endAt) {
						
						counter = 0;
						startAt = 0;
						endAt = 0;

						if(callback !== undefined) {
							callback();
						}
						
						clearInterval(interval);
					} else {
						console.log(counter);
					}

					counter = counter - 1;

				}, 1000);
			}

		}
	}

};