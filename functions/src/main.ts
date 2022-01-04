import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import * as express from 'express';
import * as functions from 'firebase-functions';

// presave function
const presaveServer: express.Express = express();
presaveServer.use(express.urlencoded({ extended: false }));
import presaveRouter from './presave/presave.routes';

presaveServer.use('/presave', presaveRouter);
export const presave: functions.HttpsFunction =
  functions.https.onRequest(presaveServer);

// api function
import { ApiModule } from './api/api.module';

const apiServer: express.Express = express();

export const createApiNestServer = async (expressInstance: express.Express) => {
  const adapter = new ExpressAdapter(expressInstance);
  const app = await NestFactory.create<NestExpressApplication>(
    ApiModule,
    adapter,
    {},
  );

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableCors();

  return app.init();
};

createApiNestServer(apiServer)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

export const api: functions.HttpsFunction =
  functions.https.onRequest(apiServer);
