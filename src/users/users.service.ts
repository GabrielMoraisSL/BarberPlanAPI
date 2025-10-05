import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateUsersDTO,
  DeleteUsersDTO,
  FindOneUsersDTO,
  GetAllUsersDTO,
  PatchUsersDTO,
} from '../dtos/Users';
import { Repository } from 'typeorm';
import { Users } from '../entities';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(user: CreateUsersDTO) {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async getfindAll(): Promise<GetAllUsersDTO[]> {
    const users = await this.usersRepository.find();
    return users.map((user) => ({
      idUsers: user.idUsers,
      name: user.name,
      email: user.email,
      createDate: user.createDate,
      cpf: user.cpf,
      idBarbershop: user.idBarbershop,
      idPosition: user.idPosition,
      phone: user.phone,
    }));
  }

  async update(id: number, updateUserDto: PatchUsersDTO): Promise<Users> {
    const user = await this.usersRepository.findOne({
      where: { idUsers: id },
    });

    if (!user) {
      // Tratar o caso em que o usuário não é encontrado
    }

    // Aplica as mudanças do DTO ao objeto encontrado
    Object.assign(user, updateUserDto);

    return this.usersRepository.save(user);
  }

  async findOne(idUsers: number): Promise<FindOneUsersDTO> {
    const user = await this.usersRepository.findOneBy({ idUsers });
    if (!user) throw new Error('User not found');

    return {
      idUsers: user.idUsers,
      name: user.name,
      email: user.email,
      createDate: user.createDate,
      cpf: user.cpf,
      idBarbershop: user.idBarbershop,
      idPosition: user.idPosition,
      phone: user.phone,
    };
  }

  async delete(idUsers: DeleteUsersDTO): Promise<void> {
    await this.usersRepository.delete(idUsers);
  }
}
