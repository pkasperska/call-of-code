import config from './config.json';

export function getNearestCity(longitude, latitude) {
   return fetch(`${config.apiUrl}/city?longitude=${longitude}&latitude=${latitude}`)
    .then(response => response.json())
}

export function fetchInitialMessages(nearestCity) {
    return fetch(`${config.apiUrl}/database-messages?nearestCity=${nearestCity}`)
        .then(response => response.json())
}