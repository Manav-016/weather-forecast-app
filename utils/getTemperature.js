const request = require("request");

const getTemperature = (place = "India", callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=4fbc3a4c47738ac61a6f4cf7a01619c9&query=" +
    encodeURIComponent(place);

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("UNABLE TO CONNECT TO WHEATHERSTACK API", undefined);
    } else if (body.error) {
      callback("UNABLE TO FIND REQUIRED OUTPUT", undefined);
    } else {
      // const responseJSON = JSON.parse(response.body);
      callback(undefined, "TEMPERATURE " + body.current.temperature);
    }
  });
};

module.exports = getTemperature;
