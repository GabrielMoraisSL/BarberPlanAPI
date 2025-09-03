import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateBenefictsDTO,
  FindOneBenefictsDTO,
  GetAllBenefictsDTO,
  PatchBenefictsDTO,
} from 'src/dtos/Beneficts';
import { Beneficts } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class BenefictsService {
  constructor(
    @InjectRepository(Beneficts)
    private benefictRepository: Repository<Beneficts>,
  ) {}

  async create(benefict: CreateBenefictsDTO) {
    const newBenefict = this.benefictRepository.create(benefict);
    return this.benefictRepository.save(newBenefict);
  }

  async getfindAll(): Promise<GetAllBenefictsDTO[]> {
    const beneficts = await this.benefictRepository.find();
    return beneficts.map((benefict) => ({
      idBeneficts: benefict.idBeneficts,
      name: benefict.name,
      status: benefict.status,
      details: benefict.details,
      time: benefict.time,
      date: benefict.date,
    }));
  }

  async update(
    id: number,
    updateBenefictDto: PatchBenefictsDTO,
  ): Promise<Beneficts> {
    const benefict = await this.benefictRepository.findOne({
      where: { idBeneficts: id },
    });

    if (!benefict) {
      // Tratar o caso em que o benefict não é encontrado
    }

    // Aplica as mudanças do DTO ao objeto encontrado
    Object.assign(benefict, updateBenefictDto);

    return this.benefictRepository.save(benefict);
  }

  async findOne(idBenefict: number): Promise<FindOneBenefictsDTO> {
    const benefict = await this.benefictRepository.findOneBy({
      idBeneficts: idBenefict,
    });
    if (!benefict) throw new Error('Benefict not found');

    return {
      idBeneficts: benefict.idBeneficts,
      name: benefict.name,
      status: benefict.status,
      details: benefict.details,
      time: benefict.time,
      date: benefict.date,
    };
  }

  async delete(idBenefict: number): Promise<void> {
    await this.benefictRepository.delete({ idBeneficts: idBenefict });
  }
}
