import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateServicesDTO,
  DeleteServicesDTO,
  FindOneServicesDTO,
  GetAllServicesDTO,
  PatchServicesDTO,
} from 'src/dtos/Services';
import { Repository } from 'typeorm';
import { Services } from '../entities';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Services)
    private servicesRepository: Repository<Services>,
  ) {}

  async create(service: CreateServicesDTO) {
    const newService = this.servicesRepository.create(service);
    return this.servicesRepository.save(newService);
  }

  async getfindAll(): Promise<GetAllServicesDTO[]> {
    const services = await this.servicesRepository.find();
    return services.map((service) => ({
      idServices: service.idServices,
      name: service.name,
      time: service.time,
      date: service.date,
      idTypeServices: service.idTypeServices,
    }));
  }

  async update(
    id: number,
    updateServiceDto: PatchServicesDTO,
  ): Promise<Services> {
    const service = await this.servicesRepository.findOne({ where: { idServices: id } });

    if (!service) {
      // Tratar o caso em que o serviço não é encontrado
    }

    // Aplica as mudanças do DTO ao objeto encontrado
    Object.assign(service, updateServiceDto);

    return this.servicesRepository.save(service);
  }

  async findOne(idServices: number): Promise<FindOneServicesDTO> {
    const service = await this.servicesRepository.findOneBy({ idServices });
    if (!service) throw new Error('Service not found');

    return {
      idServices: service.idServices,
      name: service.name,
      time: service.time,
      date: service.date,
      idTypeServices: service.idTypeServices,
    };
  }

  async delete(idServices: DeleteServicesDTO): Promise<void> {
    await this.servicesRepository.delete(idServices);
  }
}
