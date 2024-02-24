import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as morgan from 'morgan';

import { DocumentationUtils } from '@shared/utils/docs.util';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.use(morgan('dev'));
  app.enableShutdownHooks();

  new DocumentationUtils().config(app);

  await app.listen(3333);
}
bootstrap();
