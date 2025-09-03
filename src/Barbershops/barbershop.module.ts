import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Barbershops } from 'src/entities/Barbershops';
import { BarbershopController } from './barbershop.controller';
import { BarbershopsService } from './barbershop.service';

@Module({
  imports: [TypeOrmModule.forFeature([Barbershops])],
  controllers: [BarbershopController],
  providers: [BarbershopsService],
})
export class BarbershopsModule {}