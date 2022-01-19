import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import * as express from 'express';
import * as mongoSanitize from 'express-mongo-sanitize';

// api function
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

const apiServer: express.Express = express();

export const createApiNestServer = async (expressInstance: express.Express) => {
  const adapter = new ExpressAdapter(expressInstance);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    adapter,
    {},
  );

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableCors();
  app.use(mongoSanitize({ replaceWith: '. ' }));
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
};

createApiNestServer(apiServer)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));
