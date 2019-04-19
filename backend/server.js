const express = require('express');
const api = express();
const cities = require('./cities.json')

const toRadians = num => num * Math.PI / 180;

function getNearestCity(currentPosition) {
  for (city of cities) {
    const cityName = city.name;
    const distanceInKm = countDistance(city, currentPosition)
    
    if (distanceInKm < 10) {
      return cityName;
    }
  }
}
function countDistance(city, currentPosition) {
  const earthRadiusInKm = 6371;
  const {latitude, longitude} = currentPosition;
  const cityLat = parseFloat(city.cityLat);
  const cityLng = parseFloat(city.cityLng);
  const deltaLatitude = toRadians(latitude - cityLat);
  const deltaLongitude = toRadians(longitude - cityLng);

  const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
    Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2) *
    Math.cos(cityLat) * Math.cos(latitude);
  const c = 2 * Math.atan(Math.sqrt(a), Math.sqrt(1 - a));

  return c * earthRadiusInKm;
}



api.listen("3200", () => {
    console.log("Started on port 3200");
  });
  
api.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  
api.get("/city", (request, response) => {
    const nearestCity = getNearestCity(request.query);
    response.send({nearestCity});
});