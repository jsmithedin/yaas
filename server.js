'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0', 
    port: 1314
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(req, reply) {
        reply({
            message: "mon then"
        }).code( 200 );
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Hapi server running at:', server.info.uri);
});
