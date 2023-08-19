const SwaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'API Documentation',
            version: '1.0.11',
            description: 'API DOCUMENTATION',
        },
        servers: [
            {
                url: 'http://localhost:8080',
            },
        ],
    },

    apis: ['../routes/characters.js'],
};

const specs = SwaggerJsDoc(options);

module.exports = specs;