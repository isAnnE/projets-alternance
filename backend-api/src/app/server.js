import express from 'express';
import router from './router';

//Documentation
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../../swagger.json';

export const createServer = async () => {
  const server = express();

  //Using json as http response & request object
  server.use(express.json());

  //Initializing the router
  router(server);

  //Initializing our documentation
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

  return server;
};
