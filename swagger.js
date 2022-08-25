const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/router.js'];
const doc = {
    info: {
        version: '1.0.0',
        title: 'Talker Manager',
        description: 'API de um CRUD de palestrantes',
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Login',
            description: 'Login Endpoint',
        },
        {
            name: 'Talker',
            description: 'Talker Endpoints',
        },
    ],
    securityDefinitions: {
      bearerAuth: {
            type: 'apiKey',
            name: 'bearer',
            bearerFormat: 'JWT',
        },
    },
    definitions: {
        Login: {
            $email: 'email@email.com',
            $password: '123456',  
        },
        Talker: {
            id: 1,
            $name: 'Henrique Albuquerque',  
            $age: 67,  
            $talk: {
              $watchedAt: '23/10/2020',
              $rate: 5,
            },  
        },
    },
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  // eslint-disable-next-line global-require
  require('./index.js');
});