const request = require('request');
const apiKey = "&key=AIzaSyDffhOkmuqzPFL8a7Th1XTJUgzSts1sHek";

geo
var geocodeAddress = (addrString) => {
	return new Promise( (happy, sad) => {
		const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
		addrString +
		apiKey;

		request({	url: url,
							json: true
		},
			(err, response, body) => {

			if (err) {
				sad("Connection error. Unknown type.");
			}
			else if (body.status == 'ZERO_RESULTS') {
				sad("Google returned invalid address");
			}
			else if (body.status == 'OK')
			{
				happy( {
					addr: body.results[0].formatted_address,
					lat:  body.results[0].geometry.location.lat,
					long: body.results[0].geometry.location.lng
				} );
			}
		});
	});

return undefined;
}; // end func

module.exports = {
	geocodeAddress
};
