const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=4fbc3a4c47738ac61a6f4cf7a01619c9&query=India";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("UNABLE TO CONNECT TO WHEATHERSTACK API");
  } else if (response.body.error) {
    console.log("UNABLE TO FIND REQUIRED OUTPUT");
  } else {
    // const responseJSON = JSON.parse(response.body);
    console.log("TEMPERATURE " + response.body.current.temperature);
  }
});
