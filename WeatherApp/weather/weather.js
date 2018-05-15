const request = require('request');
const apiKey = "92aec65d770dea7bcaa181870e294733";

function getWeatherFromPositionXYZ(lat, long, callback) {
//console.log(`in getWeather, lat = ${lat}, long = ${long}`);
const url = "https://api.forecast.io/forecast/" +
  apiKey +
  "/" +
  lat +  "," + long
  ;
  //console.log(url);

request({
	url: url,
	json: true
}, (err, response, body) => {
// error handling
//console.log(body);
	if (err) {
		callback("Connection error. Unknown type.");
	}
	else if (response.statusCode !== 200) {
		callback("DarkSky error");
	}
	else
	{
    // Success. Return the elements we are interested in in new obj
		callback(undefined, {
			currentCondition:  body.currently.summary
		} );
	}
});

return undefined;
} // end func

module.exports.getWeatherFromPosition =	getWeatherFromPositionXYZ;
