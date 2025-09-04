import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { IncomingMessage, ServerResponse } from 'http';

export const BASE_URL = process.env.BASE_URL;

// O Nest expõe o express handler (requestListener), que é uma função
type RequestHandler = (req: IncomingMessage, res: ServerResponse) => void;

let server: RequestHandler;

async function bootstrap(): Promise<RequestHandler> {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('BarberPlan API')
    .setDescription('The BarberPlan API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('barberplan-dev-api-docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  // Apenas inicializa, sem listen (a Vercel gerencia a porta)
  await app.init();

  // Aqui sim é o express request handler
  return app.getHttpAdapter().getInstance();
}

// 🔹 Handler exportado para Vercel
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  if (!server) {
    server = await bootstrap();
  }
  return server(req, res);
}
