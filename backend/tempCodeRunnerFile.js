const cities = require('./cities.json')

const toRadians = num => num * Math.PI / 180;

function getNearestCity(cities, currentPosition) {
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
  const {lat, lng} = currentPosition;
  const cityLat = parseFloat(city.cityLat);
  const cityLng = parseFloat(city.cityLng);
  const deltaLatitude = toRadians(lat - cityLat);
  const deltaLongitude = toRadians(lng - cityLng);

  const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
    Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2) *
    Math.cos(cityLat) * Math.cos(lat);
  const c = 2 * Math.atan(Math.sqrt(a), Math.sqrt(1 - a));

  return c * earthRadiusInKm;
}

const lat = 51.974143999999995;
const lng = 15.483699199999998;

console.log(getNearestCity(cities, {lat, lng}));