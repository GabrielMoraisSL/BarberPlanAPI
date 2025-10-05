import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();

import { Request, Response } from 'express';

export default async (req: Request, res: Response): Promise<void> => {
  if (!global.app) {
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
    );

    // Configuração CORS essencial para Vercel
    app.enableCors({
      origin: process.env.NODE_ENV === 'production'
        ? process.env.ALLOWED_ORIGINS?.split(',') || true
        : true,
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
      ],
    });

    // Configuração Trust Proxy para Vercel
    const expressApp: express.Application = app.getHttpAdapter().getInstance() as express.Application;
    expressApp.set('trust proxy', true);

    // Configuração Swagger
    const config = new DocumentBuilder()
      .setTitle('BarberPlan API')
      .setDescription('The BarberPlan API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('barberplan-dev-api-docs', app, document);

    // Pipes globais
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
    global.app = app;
    server(req, res);

    return server(req, res);
  };

  // Para desenvolvimento local
  if (require.main === module) {
    async function bootstrap() {
      const app = await NestFactory.create(AppModule);

      // Configuração CORS para desenvolvimento
      app.enableCors({
        origin: true,
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: [
          'Origin',
          'X-Requested-With',
          'Content-Type',
          'Accept',
          'Authorization',
        ],
      });

      // Configuração Swagger para desenvolvimento
      const config = new DocumentBuilder()
        .setTitle('BarberPlan API')
        .setDescription('The BarberPlan API description')
        .setVersion('1.0')
        .build();

      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('barberplan-dev-api-docs', app, document);

      app.useGlobalPipes(new ValidationPipe());

      await app.listen(3000);
      console.log('BarberPlan API rodando em http://localhost:3000');
      console.log('Swagger disponível em http://localhost:3000/barberplan-dev-api-docs');
    }
    bootstrap();
  }
}