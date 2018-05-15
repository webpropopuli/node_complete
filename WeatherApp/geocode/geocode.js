const request = require('request');
const apiKey = "&key=AIzaSyDffhOkmuqzPFL8a7Th1XTJUgzSts1sHek";
function geocodeAddress(addrString, callback) {
const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
addrString +
apiKey;
//console.log(url);
request({
	url: url,
	//  "https://quotesondesign.com/wp-json/posts/",  // use: console.log(body[0].content);
	json: true

}, (err, response, body) => {
// error handling

	if (err) {
		callback("Connection error. Unknown type.");
	}
	else if (body.status == 'ZERO_RESULTS') {
		callback("Google returned invalid address");
	}
	else if (body.status == 'OK')
	{
		callback(undefined, {
			addr: body.results[0].formatted_address,
			lat:  body.results[0].geometry.location.lat,
			long: body.results[0].geometry.location.lng
		} );
	}
});

return undefined;
} // end func

module.exports = {
	geocodeAddress
};
