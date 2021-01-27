import http from 'http';
import { makeApp } from '@razorpay/universe-cli/express';
import compression from 'compression';
import chalk from 'chalk';
import packageJson from '../package.json';

const configJs = require('../universe.config.js')[process.env.STAGE];

const app = makeApp({ name: packageJson.name, version: packageJson.version });
app.use(compression());

const httpServer = http.createServer(app);

httpServer.listen(configJs.port, () => {
  console.log(chalk.green(`server is listening at http://localhost:${configJs.port}`));
});
