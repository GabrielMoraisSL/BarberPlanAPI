import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateBarberShopDTO,
  FindOneBarbershopsDTO,
  GetAllBarbershopsDTO,
  PatchBarbershopsDTO,
} from 'src/dtos/Barbershops';
import { Barbershops } from '../entities/Barbershops';
import { Repository } from 'typeorm';

@Injectable()
export class BarbershopsService {
  constructor(
    @InjectRepository(Barbershops)
    private barbershopRepository: Repository<Barbershops>,
  ) {}

  async create(barbershop: CreateBarberShopDTO) {
    const newBarbershop = this.barbershopRepository.create(barbershop);
    return this.barbershopRepository.save(newBarbershop);
  }

  async getfindAll(): Promise<GetAllBarbershopsDTO[]> {
    const barbershops = await this.barbershopRepository.find();
    return barbershops.map((barbershop) => ({
      idBarbershops: barbershop.idBarbershops,
      name: barbershop.name,
      cnpj: barbershop.cnpj,
      createDate: barbershop.createDate,
    }));
  }

  async update(
    id: number,
    updateBarbershopDto: PatchBarbershopsDTO,
  ): Promise<Barbershops> {
    const barbershop = await this.barbershopRepository.findOne({
      where: { idBarbershops: id },
    });

    if (!barbershop) {
      // Tratar o caso em que o barbershop não é encontrado
    }

    // Aplica as mudanças do DTO ao objeto encontrado
    Object.assign(barbershop, updateBarbershopDto);

    return this.barbershopRepository.save(barbershop);
  }

  async findOne(idBarbershop: number): Promise<FindOneBarbershopsDTO> {
    const barbershop = await this.barbershopRepository.findOneBy({
      idBarbershops: idBarbershop,
    });
    if (!barbershop) throw new Error('Barbershop not found');

    return {
      idBarbershops: barbershop.idBarbershops,
      name: barbershop.name,
      cnpj: barbershop.cnpj,
      createDate: barbershop.createDate,
    };
  }

  async delete(idBarbershop: number): Promise<void> {
    await this.barbershopRepository.delete({ idBarbershops: idBarbershop });
  }
}
