const request = require('request');
/* This block gets cmdline args. It will get
   replaced later when frontend is built
*/
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
//console.log(addrString);
/* end getting cmdline args */

request({
	url:
	"https://maps.googleapis.com/maps/api/geocode/json?address=" +
	addrString +
	"&key=AIzaSyDffhOkmuqzPFL8a7Th1XTJUgzSts1sHek",
//  "https://quotesondesign.com/wp-json/posts/",  // use: console.log(body[0].content);
	json: true

}, (err, response, body) => {
// error handling
	if (err)
		console.log("Connection error. Unknown type.");
	else if (body.status == 'ZERO_RESULTS')
		console.log("Google returned invalid address");
	else if (body.status == 'OK')
	{
		console.log( "lat:", body.results[0].geometry.location.lat);
		console.log("long:", body.results[0].geometry.location.lng);
	}
});
