const request = require('request');

request({
	url: 
	"https://maps.googleapis.com/maps/api/geocode/json?" +
	"address=475 valley street, providence, ri" +
	"&key=AIzaSyDffhOkmuqzPFL8a7Th1XTJUgzSts1sHek",
//	"https://webpropopuli.com/",
	json: true
	
}, (err, response, body) => {
	console.log(JSON.stringify(response, undefined, 2));
	
});