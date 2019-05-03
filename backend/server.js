const express = require("express");
const api = express();
const cities = require("./cities.json");
const { getFromDB } = require("./db");

const toRadians = num => (num * Math.PI) / 180;

function pickCityForLocation(currentPosition, cities) {
  const calculatedCitiesWithDistances = cities.map(city => ({
    city,
    distance: countDistance(city, currentPosition)
  }));
  const nearCity = calculatedCitiesWithDistances.reduce(
    (nearestCityWithDistance, cityWithDistance) => {
      return nearestCityWithDistance.distance < cityWithDistance.distance
        ? nearestCityWithDistance
        : cityWithDistance;
    }
  );
  return nearCity.city.name;
}

function countDistance(city, currentPosition) {
  const earthRadiusInKm = 6371;
  const { latitude, longitude } = currentPosition;
  const cityLat = toRadians(parseFloat(city.cityLat));
  const cityLng = toRadians(parseFloat(city.cityLng));
  const latitudeRadians = toRadians(latitude);
  const longitudeRadians = toRadians(longitude)
  const delta = longitudeRadians - cityLng;

  const distance =
    Math.acos(
      Math.sin(cityLat) * Math.sin(latitudeRadians) +
        Math.cos(cityLat) * Math.cos(latitudeRadians) * Math.cos(delta)
    ) * earthRadiusInKm;
  return distance;
}

api.listen("3200", () => {
  console.log("Started on port 3200");
});

api.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

api.get("/city", (request, response) => {
  const nearestCity = pickCityForLocation(request.query, cities);
  response.send({ nearestCity });
});

api.get("/database-messages", async (request, response) => {
  const messagesDB = await getFromDB(request.query.nearestCity);
  response.send(messagesDB);
});

module.exports = {pickCityForLocation, countDistance, api}