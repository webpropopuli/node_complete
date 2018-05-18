const axios = require('axios');
const yargs = require('yargs')
const argv = yargs
	.options({
			a: {
				demand: true,
				alias: 'address',
				describe: 'Address to get coords for',
				string: true	//make sure something is entered
			},
	})
	.help ()
	.alias('help', 'h')
	.argv;

	const mapsApiKey = "&key=AIzaSyDffhOkmuqzPFL8a7Th1XTJUgzSts1sHek";
	const weatherApiKey = "92aec65d770dea7bcaa181870e294733";

	var encAddress = encodeURIComponent(argv.address);
	var geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=`
		+	encAddress + mapsApiKey;

	axios({
		method : 'get',
		url : geoUrl
	})
		.then( (response) => {
			// Handle 'No_RESULTS error
			if(response.data.status === 'ZERO_RESULTS')
				throw new Error('Google found no result for that location'); // This jumps to our catch block

			var lat = response.data.results[0].geometry.location.lat;
			var lng = response.data.results[0].geometry.location.lng;

			const weatherUrl = "https://api.forecast.io/forecast/" +
			weatherApiKey + "/" + lat +  "," + lng ;

			console.log("\n***\nCurrently in ", response.data.results[0].formatted_address);

			return axios.get(weatherUrl);
		})
				.then( (response) => {
					var temp = response.data.currently.temperature;
					var status = response.data.currently.summary;
					console.log(`it's ${temp} and ${status}\n***`);
		})
		.catch( (e) => {
			if(e.code === 'ENOTFOUND') {
				console.log("Unable to connect to Google API");
			}
			else {
				console.log(e.message);
			}
		});
