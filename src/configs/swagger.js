const swaggerAutogen = require("swagger-autogen")();

const options = {
  info: {
    title: "Documentation",
    description: "API Documentation",
  },
  servers: [
    {
      url: "http://localhost:8080",
    },
  ],
  schemes: ["http"],
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      in: "header",
      bearerFormat: "JWT",
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["../../server.js"];
swaggerAutogen(outputFile, endpointsFiles, options);
