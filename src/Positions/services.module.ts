import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Positions } from 'src/entities';
import { PositionsController } from './services.controller';
import { PositionsService } from './services.service';

@Module({
  imports: [TypeOrmModule.forFeature([Positions])],
  controllers: [PositionsController],
  providers: [PositionsService],
})
export class PositionsModule {}