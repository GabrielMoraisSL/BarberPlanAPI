import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateClientsDTO,
  DeleteClientsDTO,
  FindOneClientsDTO,
  GetAllClientsDTO,
  PatchClientsDTO,
} from '../dtos/Clients';
import { Repository } from 'typeorm';
import { Clients } from '../entities';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Clients)
    private clientsRepository: Repository<Clients>,
  ) {}

  async create(client: CreateClientsDTO) {
    const newClient = this.clientsRepository.create(client);
    return this.clientsRepository.save(newClient);
  }

  async getfindAll(): Promise<GetAllClientsDTO[]> {
    const clients = await this.clientsRepository.find();
    return clients.map((client) => ({
      idClients: client.idClients,
      name: client.name,
      password: client.password,
      cpf: client.cpf,
      email: client.email,
      createDate: client.createDate,
    }));
  }

  async update(id: number, updateClientDto: PatchClientsDTO): Promise<Clients> {
    const client = await this.clientsRepository.findOne({
      where: { idClients: id },
    });

    if (!client) {
      // Tratar o caso em que o cliente não é encontrado
    }

    // Aplica as mudanças do DTO ao objeto encontrado
    Object.assign(client, updateClientDto);

    return this.clientsRepository.save(client);
  }

  async findOne(idClients: number): Promise<FindOneClientsDTO> {
    const client = await this.clientsRepository.findOneBy({ idClients });
    if (!client) throw new Error('Client not found');

    return {
      idClients: client.idClients,
      name: client.name,
      password: client.password,
      cpf: client.cpf,
      email: client.email,
      createDate: client.createDate,
    };
  }

  async delete(idClients: DeleteClientsDTO): Promise<void> {
    await this.clientsRepository.delete(idClients);
  }
}
