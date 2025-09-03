import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const app = await bootstrap();
  const server = app.getHttpAdapter().getInstance();
  server(req, res); 
}
