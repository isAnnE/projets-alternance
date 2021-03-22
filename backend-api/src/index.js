import { createServer } from '../backend-api/src/app/server';
import { PORT } from '../backend-api/src/config/constants';

//Initializing our app server with express
createServer().then((server) => {
  //Make the server listened on a specific port
  server.listen(PORT, () => {
    console.info(`\n`);
    console.info(`----------- LAUNCHING SERVER -----------`);
    console.info(`\n`);
    console.info(`Server is listening on port ${PORT}`);
    console.info(`\n`);
    console.info(`----------------------------------------`);
  });
});
