import * as express from 'express';
import * as functions from 'firebase-functions';

// presave function
const presaveServer: express.Express = express();
presaveServer.use(express.urlencoded({ extended: false }));
import presaveRouter from './presave/presave.routes';

presaveServer.use('/presave', presaveRouter);
export const presave: functions.HttpsFunction =
  functions.https.onRequest(presaveServer);
