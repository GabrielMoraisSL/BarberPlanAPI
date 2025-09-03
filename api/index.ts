import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module'; // Verifique o caminho para o seu AppModule
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { INestApplication } from '@nestjs/common';
import { VercelRequest, VercelResponse } from '@vercel/node';

let cachedApp: INestApplication;

async function bootstrap() {
  if (!cachedApp) {
    const server = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    await app.init();
    cachedApp = app;
  }
  return cachedApp;
}

// Handler para a Vercel
export default async function (req: VercelRequest, res: VercelResponse) {
  const app = await bootstrap();

  const server = app.getHttpAdapter().getInstance() as express.Express;
  server(req, res);
}
