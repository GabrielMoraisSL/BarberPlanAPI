import { ApiProperty } from '@nestjs/swagger';

export class GetAllClientsDTO {
  @ApiProperty()
  idClients: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  createDate: string;
}

export class FindOneClientsDTO {
  @ApiProperty()
  idClients: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  createDate: string;
}

export class PatchClientsDTO {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  password?: string;

  @ApiProperty()
  cpf?: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  createDate?: string;
}

export class CreateClientsDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  email: string;
}

export class DeleteClientsDTO {
  @ApiProperty()
  idClients: number;
}

