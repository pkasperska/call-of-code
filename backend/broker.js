const mosca = require('mosca');
const { saveToDB } = require ('./db')

const settings = {
    port: 1883,
    http: {
        port: 1884,
        bundle: true,
        static: './'
      },
};

const server = new mosca.Server(settings);
server.on('ready', function () {
    console.log('Mosca server is up and running');
    });

server.on('published', function (packet, client) {
    try {
        const payload = JSON.parse(packet.payload.toString());
        {payload.hasOwnProperty('title') && saveToDB(payload)}
    }
    catch (err) {}
});
