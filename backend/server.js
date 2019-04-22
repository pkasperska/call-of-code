const express = require('express');
const api = express();
const cities = require('./cities.json')

const toRadians = num => num * Math.PI / 180;

function pickCityForLocation(currentPosition, cities) {
  const calculatedCitiesWithDistances = cities.map(city => ({city, distance: countDistance(city, currentPosition)}));
  const nearCity = calculatedCitiesWithDistances.reduce((nearestCityWithDistance, cityWithDistance) => {
    return nearestCityWithDistance.distance < cityWithDistance.distance ? 
      nearestCityWithDistance : cityWithDistance
  });
  console.log(calculatedCitiesWithDistances)
  return nearCity.city.name;
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
    const nearestCity = pickCityForLocation(request.query, cities);
    response.send({nearestCity});
});