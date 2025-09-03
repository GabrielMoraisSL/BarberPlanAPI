import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreatePositionsDTO,
  GetAllPositionsDTO,
  PatchPositionsDTO,
} from 'src/dtos/Positions';
import { Repository } from 'typeorm';
import { Positions } from '../entities';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Positions)
    private positionsRepository: Repository<Positions>,
  ) {}

  async create(position: CreatePositionsDTO) {
    const newPosition = this.positionsRepository.create(position);
    return this.positionsRepository.save(newPosition);
  }

  async getfindAll(): Promise<GetAllPositionsDTO[]> {
    const positions = await this.positionsRepository.find();
    return positions.map((position) => ({
      idPositions: position.idPositions,
      type: position.type,
    }));
  }

  async update(
    id: number,
    updatePositionDto: PatchPositionsDTO,
  ): Promise<Positions> {
    const position = await this.positionsRepository.findOne({
      where: { idPositions: id },
    });

    if (!position) {
      // Tratar o caso em que o serviço não é encontrado
    }

    // Aplica as mudanças do DTO ao objeto encontrado
    Object.assign(position, updatePositionDto);

    return this.positionsRepository.save(position);
  }
}
