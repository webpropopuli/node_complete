const request = require('request');
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

//console.log(argv);
var addrString = encodeURIComponent(argv.a);
console.log(addrString);
request({
	url:
	"https://maps.googleapis.com/maps/api/geocode/json?address=" +
	addrString +
	"&key=AIzaSyDffhOkmuqzPFL8a7Th1XTJUgzSts1sHek",
// 	"https://webpropopuli.com/",
//  "https://quotesondesign.com/wp-json/posts/",  // use: console.log(body[0].content);
	json: true

}, (err, response, body) => {

	console.log( "lat:", body.results[0].geometry.location.lat);
	console.log("long:", body.results[0].geometry.location.lng);
});
