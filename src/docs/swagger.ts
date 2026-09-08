import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v0.0.1',
    titile: 'Dokumentasi API ACARA',
    description: 'Dokumentasi API ACARA',
  },

  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Local Server',
    },
    {
      url: 'https://back-end-acara-snowy.vercel.app/api',
      description: 'Deploy Server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    schemas: {
      LoginRequest: {
        identifier: 'basuputra',
        password: '12344321',
      },
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['../routes/api.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
