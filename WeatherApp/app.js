/* This block gets cmdline args. It will get
   replaced later when frontend is built
*/
const geo = require('./geocode/geocode');
const wthr = require('./weather/weather.js');

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

var addrString = encodeURIComponent(argv.a);
/* end getting cmdline args */

console.log(">> Looking up location...")
geo.geocodeAddress(addrString) => {
	if(errMsg)
		console.log(errMsg);
	else {
		console.log(">> Checking the weather...");
		wthr.getWeatherFromPosition(results.lat, results.long, (err, res) => {
			if(errMsg)
				console.log(`ERR (getWeather) ${errMsg}`);
			else {
				console.log(`The weather in ${results.addr} is ${res.currentCondition}`);
				// success!
			}
		});
	}
});
