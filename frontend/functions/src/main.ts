import * as express from 'express';
import * as functions from 'firebase-functions';

import { fetchPresaves } from './presave/presave.service';

// presave function
const presaveServer: express.Express = express();

presaveServer.use(express.urlencoded({ extended: false }));

presaveServer.use(async (req, res, next) => {
  if (!presaveServer.locals.presaves) {
    const response = await fetchPresaves();
    presaveServer.locals.presaves = response.data;
  }
  next();
});

import presaveRouter from './presave/presave.routes';
presaveServer.use('/presave', presaveRouter);

export const presave: functions.HttpsFunction = functions.https.onRequest(presaveServer);
