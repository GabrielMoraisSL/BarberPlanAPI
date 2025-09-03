import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficts } from 'src/entities';
import { BenefictsController } from './beneficts.controller';
import { BenefictsService } from './beneficts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Beneficts])],
  controllers: [BenefictsController],
  providers: [BenefictsService],
})
export class BenefictsModule {}
