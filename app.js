const request = require("request");
const getForecast = require("./utils/getForecast");
const getTemperature = require("./utils/getTemperature");


getTemperature((process.argv[2]), (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
}); 
