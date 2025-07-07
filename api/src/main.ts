import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import * as mongoSanitize from 'express-mongo-sanitize';
import * as dotenv from 'dotenv';

// api function
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';

dotenv.config();

const apiServer: express.Express = express();

export const createApiNestServer = async (expressInstance: express.Express) => {
  const adapter = new ExpressAdapter(expressInstance);
  const app = await NestFactory.create<NestExpressApplication>(AppModule, adapter, {});

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableCors({
    origin: [
      'http://localhost:4200',  // Frontend app
      'http://localhost:4201',  // Admin app
      'http://127.0.0.1:4200',
      'http://127.0.0.1:4201',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  });
  app.use(helmet());
  app.use(mongoSanitize({ replaceWith: '. ' }));
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
};

createApiNestServer(apiServer)
  .then(() => {})
  .catch((err) => {
    throw err;
  });
