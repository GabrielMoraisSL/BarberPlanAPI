// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarbershopsModule } from './Barbershops/barbershop.module';
import { BenefictsModule } from './Beneficts/beneficts.module';
import { ClientsModule } from './clients/clients.module';
import { Barbershops } from './entities/Barbershops';
import { Beneficts } from './entities/Beneficts';
import { Clients } from './entities/Clients';
import { Positions } from './entities/Positions';
import { Services } from './entities/Services';
import { TypeServices } from './entities/TypeServices';
import { Users } from './entities/Users';
import { ServicesModule } from './services/services.module';
import { UsersModule } from './users/users.module';
import { PositionsModule } from './Positions/services.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [
          Beneficts,
          Services,
          TypeServices,
          Clients,
          Positions,
          Users,
          Barbershops,
        ],
      }),
    }),
    UsersModule,
    ServicesModule,
    BenefictsModule,
    BarbershopsModule,
    ClientsModule,
    PositionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
